import { Injectable } from '@nestjs/common';
import { AuditRepository } from '../repositories/audit.repository';

@Injectable()
export class AuditService {
  constructor(private readonly auditRepository: AuditRepository) {}

  async logPostLifecycle(postId: string, event: string, metadata?: string): Promise<void> {
    await this.auditRepository.createLog({ postId, event, metadata });
  }
}
