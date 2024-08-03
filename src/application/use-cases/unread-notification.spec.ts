import { makeNotification } from "test/factories/notification-factory";
import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import CancelNotification from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import ReadNotification from "./read-notification";
import UnReadNotification from "./unread-notification";


describe("UnReadNotification Use Case", () => {
    it("should be able to send a Notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const unReadNotification = new UnReadNotification(notificationRepository);
        
        const notification = makeNotification({ readAt: new Date() });

        await notificationRepository.create(notification);

        await unReadNotification.execute({
            notificationId: notification.id
        });

        expect(notificationRepository.notifications[0].readAt).toEqual(null)
    })

    it("should not be able to read a Notification that was not created", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const unReadNotification = new UnReadNotification(notificationRepository);

        const cancelPromisse = unReadNotification.execute({
            notificationId: "not-created"
        });

        expect(cancelPromisse).rejects.toThrow(NotificationNotFound)
    })
})