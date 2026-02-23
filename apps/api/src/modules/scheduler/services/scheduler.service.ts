import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Queue } from 'bullmq';
import Redis from 'ioredis';

@Injectable()
export class SchedulerService implements OnModuleDestroy {
  private readonly connection = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379', { maxRetriesPerRequest: null });
  private readonly queue = new Queue('post-publish', { connection: this.connection });

  async enqueuePublishJob(postId: string, scheduledAt: Date): Promise<void> {
    const delay = Math.max(0, scheduledAt.getTime() - Date.now());
    await this.queue.add(
      'publish-post',
      { postId },
      {
        delay,
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 }
      }
    );
  }

  async onModuleDestroy(): Promise<void> {
    await this.queue.close();
    await this.connection.quit();
  }
}
