import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Headers('x-user-id') userId: string, @Body() dto: CreatePostDto): Promise<{ postId: string }> {
    return this.postsService.create(userId, dto);
  }

  @Get()
  async list(@Headers('x-user-id') userId: string): Promise<Array<{ id: string; status: string; platform: string; scheduledAt: string }>> {
    return this.postsService.list(userId);
  }
}
