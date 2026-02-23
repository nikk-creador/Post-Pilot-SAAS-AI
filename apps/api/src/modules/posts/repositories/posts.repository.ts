import { Injectable } from '@nestjs/common';
import { PostStatus, Platform } from '@prisma/client';
import { PrismaService } from '../../../services/prisma.service';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(data: { userId: string; platform: Platform; content: string; scheduledAt: Date; timezone: string }): Promise<{ id: string }> {
    const post = await this.prisma.post.create({
      data: {
        userId: data.userId,
        platform: data.platform,
        content: data.content,
        scheduledAt: data.scheduledAt,
        timezone: data.timezone,
        status: PostStatus.SCHEDULED
      },
      select: { id: true }
    });

    return post;
  }

  async listByUser(userId: string): Promise<Array<{ id: string; status: PostStatus; platform: Platform; scheduledAt: Date }>> {
    return this.prisma.post.findMany({
      where: { userId },
      select: { id: true, status: true, platform: true, scheduledAt: true },
      orderBy: { scheduledAt: 'desc' }
    });
  }
}
