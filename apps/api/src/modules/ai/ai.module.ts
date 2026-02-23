import { Module } from '@nestjs/common';
import { AiController } from './controllers/ai.controller';
import { AiPostService } from './services/ai-post.service';
import { PromptTemplateService } from './services/prompt-template.service';

@Module({
  controllers: [AiController],
  providers: [AiPostService, PromptTemplateService],
  exports: [AiPostService]
})
export class AiModule {}
