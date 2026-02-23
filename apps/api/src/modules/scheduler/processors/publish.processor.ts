import { Job, Worker } from 'bullmq';
import Redis from 'ioredis';

const connection = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379', { maxRetriesPerRequest: null });

export const publishWorker = new Worker(
  'post-publish',
  async (job: Job<{ postId: string }>) => {
    // Placeholder for social API publish integrations.
    return { published: true, postId: job.data.postId };
  },
  { connection }
);
