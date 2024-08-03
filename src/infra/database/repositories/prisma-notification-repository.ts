import { Notification } from "src/application/entities/Notification";
import NotificationRepository from "src/application/repositories/notification-repositories";
import { PrismaService } from "../prisma/primsa.service";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "../prisma/mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}
    
    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        
        await this.prismaService.notification.create({
            data: raw
        })
    }
    
}