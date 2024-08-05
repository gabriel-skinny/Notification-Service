import { Notification } from "src/application/entities/Notification";
import NotificationRepository from "src/application/repositories/notification-repositories";
import { PrismaService } from "../prisma/primsa.service";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "../prisma/mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}
    
    async findByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaService.notification.findMany({
            where: {
                recipientId
            }
        })

        return notifications.map(PrismaNotificationMapper.toDomain);
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prismaService.notification.count({
            where: {
                recipientId
            }
        })

        return count;
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notification.findFirst({
            where: {
                id: notificationId
            }
        })

        if (!notification) return null;

        return PrismaNotificationMapper.toDomain(notification);
    }
    
    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prismaService.notification.update({
            where: {
                id: raw.id
            },
            data: raw
        })
    }
    
    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        
        await this.prismaService.notification.create({
            data: raw
        })
    }
    
}