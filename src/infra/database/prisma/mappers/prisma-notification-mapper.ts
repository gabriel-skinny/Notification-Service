import { Notification } from "src/application/entities/Notification";
import { Notification as RawNotification } from "@prisma/client"
import { Content } from "src/application/entities/content";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }
    }
    static toDomain(raw: RawNotification) {
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            createdAt: raw.createdAt
        }, raw.id)
    }
}