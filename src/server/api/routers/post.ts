import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

interface UpdateData {
  title?: string;
  content?: string;
  excerpt?: string;
  featured?: boolean;
  published?: boolean;
  slug?: string;
}

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ 
      title: z.string().min(1),
      content: z.string().min(1),
      excerpt: z.string().optional(),
      slug: z.string().optional(),
      featured: z.boolean().optional(),
      published: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Generate slug if not provided
      const slug = input.slug ?? input.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .replace(/[^\w\s-]/g, '') // remove special characters
        .replace(/[\s_-]+/g, '-') // replace spaces and underscores with dash
        .replace(/^-+|-+$/g, ''); // remove dash at start and end

      // Generate excerpt if not provided
      const excerpt = input.excerpt ?? input.content.replace(/[#*_`\[\]()]/g, '').trim().substring(0, 150) + '...';

      return ctx.db.post.create({
        data: {
          title: input.title,
          slug,
          content: input.content,
          excerpt,
          featured: input.featured ?? false,
          published: input.published ?? true,
          createdById: ctx.session.user.id,
        },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdById: ctx.session.user.id },
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });

    return post ?? null;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { slug: input.slug },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      return post ?? null;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().optional(),
      content: z.string().optional(),
      excerpt: z.string().optional(),
      featured: z.boolean().optional(),
      published: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...inputData } = input;
      const updateData: UpdateData = { ...inputData };
      
      // Generate new slug if title changes
      if (updateData.title) {
        updateData.slug = updateData.title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');
      }

      // Generate excerpt if content changes but excerpt is not provided
      if (updateData.content && !updateData.excerpt) {
        updateData.excerpt = updateData.content.replace(/[#*_`\[\]()]/g, '').trim().substring(0, 150) + '...';
      }

      return ctx.db.post.update({
        where: { id },
        data: updateData,
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({
        where: { id: input.id }
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
