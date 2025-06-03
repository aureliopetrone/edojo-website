import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // Auth & Database
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    NEON_POSTGRESS_POSTGRES_URL: z.string().url().optional(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    
    // NextAuth
    NEXTAUTH_SECRET: z.string().optional(),
    NEXTAUTH_URL: z.string().url().optional(),
    
    // Email Service
    RESEND_API_KEY: z.string(),
    
    // Vercel Blob Storage
    BLOB_READ_WRITE_TOKEN: z.string(),
    
    // Company Contact Information
    CONTACT_EMAIL: z.string().email(),
    CONTACT_PHONE: z.string(),
    CONTACT_PHONE_DISPLAY: z.string(),
    
    // Company Information
    COMPANY_NAME: z.string(),
    COMPANY_ADDRESS_LINE1: z.string(),
    COMPANY_ADDRESS_LINE2: z.string(),
    COMPANY_VAT: z.string(),
    
    // Email Configuration
    EMAIL_FROM_NAME: z.string(),
    EMAIL_FROM_ADDRESS: z.string().email(),
    EMAIL_REPLY_TO: z.string().email(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_GA_ID: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Auth & Database
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    DATABASE_URL: process.env.NEON_POSTGRESS_POSTGRES_URL || process.env.DATABASE_URL,
    NEON_POSTGRESS_POSTGRES_URL: process.env.NEON_POSTGRESS_POSTGRES_URL,
    NODE_ENV: process.env.NODE_ENV,
    
    // NextAuth
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    
    // Email Service
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    
    // Vercel Blob Storage
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
    
    // Company Contact Information
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_PHONE: process.env.CONTACT_PHONE,
    CONTACT_PHONE_DISPLAY: process.env.CONTACT_PHONE_DISPLAY,
    
    // Company Information
    COMPANY_NAME: process.env.COMPANY_NAME,
    COMPANY_ADDRESS_LINE1: process.env.COMPANY_ADDRESS_LINE1,
    COMPANY_ADDRESS_LINE2: process.env.COMPANY_ADDRESS_LINE2,
    COMPANY_VAT: process.env.COMPANY_VAT,
    
    // Email Configuration
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
    EMAIL_REPLY_TO: process.env.EMAIL_REPLY_TO,
    
    // Analytics
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
