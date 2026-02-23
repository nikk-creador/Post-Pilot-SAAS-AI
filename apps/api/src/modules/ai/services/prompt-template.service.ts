import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Platform } from '../../../common/constants/platform.enum';

interface PromptTemplate {
  version: string;
  platformPrompts: Record<Platform, string>;
}

@Injectable()
export class PromptTemplateService {
  private readonly template: PromptTemplate;

  constructor() {
    const promptsPath = join(process.cwd(), '../../docs/prompts.json');
    this.template = JSON.parse(readFileSync(promptsPath, 'utf8')) as PromptTemplate;
  }

  getTemplate(platform: Platform): { version: string; prompt: string } {
    return {
      version: this.template.version,
      prompt: this.template.platformPrompts[platform]
    };
  }
}
