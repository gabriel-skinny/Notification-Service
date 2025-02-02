import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import NotificationRepository from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationResponse = void;
@Injectable()
export default class ReadNotification {
    constructor(private notificationsRepository: NotificationRepository) {

    }

    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification) throw new NotificationNotFound();    
    
        notification.read();

        await this.notificationsRepository.save(notification);
    }
}