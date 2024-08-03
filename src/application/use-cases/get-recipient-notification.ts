import { Injectable } from "@nestjs/common";
import NotificationRepository from "../repositories/notification-repositories";
import { Notification } from "../entities/Notification";

interface GetRecipientNotificationRequest {
    recipientId: string;
}

interface GetRecipientNotificationResponse {
    notifications: Notification[];
};

@Injectable()
export default class GetRecipientNotification {
    constructor(private notificationsRepository: NotificationRepository) {

    }

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findByRecipientId(recipientId);

        return { notifications }
    }
}