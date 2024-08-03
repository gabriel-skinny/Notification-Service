import { Notification } from "../entities/Notification";
import NotificationRepository from "./notification-repositories";

 
export default class InMemoryNotificationsRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async findByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(n => n.recipientId == recipientId);
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(n => n.recipientId == recipientId).length;
    }
    
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(n => n.id == notificationId);
        
        if (!notification) return null;

        return notification;
    }
    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(i => i.id == notification.id)

        if (notificationIndex >= 0)
            this.notifications[notificationIndex] = notification;
    }


    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}