import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { Platform } from '../../../common/constants/platform.enum';

export class GeneratePostDto {
  @IsString()
  @MaxLength(400)
  topic!: string;

  @IsEnum(Platform)
  platform!: Platform;

  @IsOptional()
  @IsString()
  tone?: string;
}
