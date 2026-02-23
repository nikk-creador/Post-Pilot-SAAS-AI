import { IsDateString, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { Platform } from '../../../common/constants/platform.enum';

export class CreatePostDto {
  @IsEnum(Platform)
  platform!: Platform;

  @IsString()
  @MaxLength(280)
  content!: string;

  @IsDateString()
  scheduledAt!: string;

  @IsOptional()
  @IsString()
  timezone?: string;
}
