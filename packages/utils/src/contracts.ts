import { z } from 'zod';

export const createPostSchema = z.object({
  platform: z.enum(['LINKEDIN', 'TWITTER', 'INSTAGRAM', 'FACEBOOK']),
  content: z.string().min(1).max(3000),
  scheduledAt: z.string().datetime(),
  timezone: z.string().default('UTC')
});

export type CreatePostContract = z.infer<typeof createPostSchema>;
