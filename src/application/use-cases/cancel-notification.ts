import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import NotificationRepository from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;
@Injectable()
export default class CancelNotification {
    constructor(private notificationsRepository: NotificationRepository) {

    }

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification) throw new NotificationNotFound();    
    
        notification.cancel();

        await this.notificationsRepository.save(notification);
    }
}