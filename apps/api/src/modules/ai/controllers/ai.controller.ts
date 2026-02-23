import { Body, Controller, Post } from '@nestjs/common';
import { GeneratePostDto } from '../dto/generate-post.dto';
import { AiPostService } from '../services/ai-post.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiPostService: AiPostService) {}

  @Post('generate-post')
  async generatePost(@Body() dto: GeneratePostDto): Promise<{ content: string; hashtags: string[]; promptVersion: string }> {
    return this.aiPostService.generatePost(dto);
  }
}
