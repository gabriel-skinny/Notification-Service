import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import NotificationRepository from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface UnReadNotificationRequest {
    notificationId: string;
}

type UnReadNotificationResponse = void;
@Injectable()
export default class UnReadNotification {
    constructor(private notificationsRepository: NotificationRepository) {

    }

    async execute(request: UnReadNotificationRequest): Promise<UnReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification) throw new NotificationNotFound();    
    
        notification.unRead();

        await this.notificationsRepository.save(notification);
    }
}