import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/primsa.service';
import NotificationRepository from 'src/application/repositories/notification-repositories';
import { PrismaNotificationRepository } from './repositories/prisma-notification-repository';

@Module({
  providers: [PrismaService, {
    provide: NotificationRepository,
    useClass: PrismaNotificationRepository
  }],
  exports: [NotificationRepository]
})
export class DatabaseModule {}
