import { Notification } from "../entities/Notification";
import NotificationRepository from "./notification-repositories";

 
export default class InMemoryNotificationsRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}