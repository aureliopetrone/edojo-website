import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getUserId() {
  try {
    console.log('🔍 Ricerca utenti nel database...')
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        _count: {
          select: {
            posts: true
          }
        }
      }
    })
    
    if (users.length === 0) {
      console.log('❌ Nessun utente trovato nel database')
      console.log('💡 Esegui il seeding: npm run seed')
      return
    }
    
    console.log('👥 Utenti trovati:')
    console.log('='.repeat(60))
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. ID: ${user.id}`)
      console.log(`   Nome: ${user.name}`)
      console.log(`   Email: ${user.email}`)
      console.log(`   Post creati: ${user._count.posts}`)
      console.log('')
    })
    
    if (users.length === 1) {
      console.log('✅ Usa questo ID nel file .env:')
      console.log(`DEFAULT_BLOG_USER_ID="${users[0].id}"`)
    } else {
      console.log('💡 Scegli uno degli ID sopra per DEFAULT_BLOG_USER_ID')
    }
    
  } catch (error) {
    console.error('❌ Errore:', error)
  } finally {
    await prisma.$disconnect()
  }
}

getUserId() 