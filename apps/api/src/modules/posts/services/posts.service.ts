import { Injectable } from '@nestjs/common';
import { Platform } from '@prisma/client';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostsRepository } from '../repositories/posts.repository';
import { SchedulerService } from '../../scheduler/services/scheduler.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository,
    private readonly schedulerService: SchedulerService
  ) {}

  async create(userId: string, dto: CreatePostDto): Promise<{ postId: string }> {
    const created = await this.postsRepository.createPost({
      userId,
      platform: dto.platform as unknown as Platform,
      content: dto.content,
      scheduledAt: new Date(dto.scheduledAt),
      timezone: dto.timezone ?? 'UTC'
    });

    await this.schedulerService.enqueuePublishJob(created.id, new Date(dto.scheduledAt));

    return { postId: created.id };
  }

  async list(userId: string): Promise<Array<{ id: string; status: string; platform: string; scheduledAt: string }>> {
    const posts = await this.postsRepository.listByUser(userId);
    return posts.map((post) => ({
      ...post,
      status: post.status,
      platform: post.platform,
      scheduledAt: post.scheduledAt.toISOString()
    }));
  }
}
