import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import NotificationRepository from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CountRecipientNotificationsRequest {
    recipientId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;
};

@Injectable()
export default class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationRepository) {

    }

    async execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const countNumber = await this.notificationsRepository.countManyByRecipientId(recipientId);

        return { count: countNumber }
    }
}