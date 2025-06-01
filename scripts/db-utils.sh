#!/bin/bash

# Database Utilities for eDojo PostgreSQL
# Assicurati di avere DATABASE_URL configurato nel tuo .env

set -e

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "🗄️  eDojo Database Utilities (PostgreSQL)"
echo "=========================================="
echo -e "${NC}"

# Verifica che DATABASE_URL sia configurato
if [ -z "$DATABASE_URL" ]; then
    echo -e "${RED}❌ ERROR: DATABASE_URL not found in environment${NC}"
    echo "   Make sure to set it in your .env file or export it:"
    echo "   export DATABASE_URL=\"your-postgresql-url\""
    exit 1
fi

case "${1:-help}" in
    "migrate")
        echo -e "${YELLOW}🔄 Running database migration...${NC}"
        npx prisma migrate dev
        echo -e "${GREEN}✅ Migration completed!${NC}"
        ;;
    
    "reset")
        echo -e "${YELLOW}⚠️  Resetting database (this will delete all data)...${NC}"
        read -p "Are you sure? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npx prisma migrate reset --force
            echo -e "${GREEN}✅ Database reset completed!${NC}"
        else
            echo -e "${BLUE}ℹ️  Reset cancelled${NC}"
        fi
        ;;
    
    "deploy")
        echo -e "${YELLOW}🚀 Deploying migrations to production...${NC}"
        npx prisma migrate deploy
        echo -e "${GREEN}✅ Production deployment completed!${NC}"
        ;;
    
    "studio")
        echo -e "${YELLOW}🎨 Opening Prisma Studio...${NC}"
        npx prisma studio
        ;;
    
    "status")
        echo -e "${YELLOW}📊 Checking migration status...${NC}"
        npx prisma migrate status
        ;;
    
    "seed")
        echo -e "${YELLOW}🌱 Seeding database...${NC}"
        npx prisma db seed
        echo -e "${GREEN}✅ Database seeded!${NC}"
        ;;
    
    "generate")
        echo -e "${YELLOW}⚙️  Generating Prisma Client...${NC}"
        npx prisma generate
        echo -e "${GREEN}✅ Client generated!${NC}"
        ;;
    
    "backup")
        echo -e "${YELLOW}💾 Creating database backup...${NC}"
        BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"
        pg_dump "$DATABASE_URL" > "$BACKUP_FILE"
        echo -e "${GREEN}✅ Backup saved as: $BACKUP_FILE${NC}"
        ;;
    
    "help"|*)
        echo -e "${BLUE}📖 Available commands:${NC}"
        echo ""
        echo "  migrate   - Run database migrations"
        echo "  reset     - Reset database (deletes all data)"
        echo "  deploy    - Deploy migrations to production"
        echo "  studio    - Open Prisma Studio"
        echo "  status    - Check migration status"
        echo "  seed      - Seed database with initial data"
        echo "  generate  - Generate Prisma Client"
        echo "  backup    - Create database backup"
        echo "  help      - Show this help"
        echo ""
        echo -e "${YELLOW}Examples:${NC}"
        echo "  ./scripts/db-utils.sh migrate"
        echo "  ./scripts/db-utils.sh studio"
        echo "  ./scripts/db-utils.sh backup"
        ;;
esac 