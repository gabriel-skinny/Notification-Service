import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import CancelNotification from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "../../../test/factories/notification-factory";


describe("CancelNotification Use Case", () => {
    it("should be able to send a Notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationRepository);
        
        const notification = makeNotification();

        await notificationRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id
        });

        expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
    })

    it("should not be able to cancel a Notification that was not created", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        const cancelPromisse = cancelNotification.execute({
            notificationId: "not-created"
        });

        expect(cancelPromisse).rejects.toThrow(NotificationNotFound)
    })
})