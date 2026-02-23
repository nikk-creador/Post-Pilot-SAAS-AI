import { Injectable } from '@nestjs/common';
import { GeneratePostDto } from '../dto/generate-post.dto';
import { PromptTemplateService } from './prompt-template.service';

@Injectable()
export class AiPostService {
  constructor(private readonly promptTemplateService: PromptTemplateService) {}

  async generatePost(input: GeneratePostDto): Promise<{ content: string; hashtags: string[]; promptVersion: string }> {
    const template = this.promptTemplateService.getTemplate(input.platform);
    const content = `${template.prompt}\nTopic: ${input.topic}\nTone: ${input.tone ?? 'default'}`;

    return {
      content,
      hashtags: ['#postpilot', '#socialmedia', '#ai'],
      promptVersion: template.version
    };
  }
}
