import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../services/prisma.service';

@Injectable()
export class AuditRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createLog(data: { postId: string; event: string; metadata?: string }): Promise<void> {
    await this.prisma.auditLog.create({ data });
  }
}
