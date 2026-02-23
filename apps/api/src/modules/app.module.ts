import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './ai/ai.module';
import { PostsModule } from './posts/posts.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { AuditModule } from './audit/audit.module';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AiModule, PostsModule, SchedulerModule, AuditModule],
  providers: [PrismaService]
})
export class AppModule {}
