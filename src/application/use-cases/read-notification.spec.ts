import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import CancelNotification from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import ReadNotification from "./read-notification";


describe("ReadNotification Use Case", () => {
    it("should be able to send a Notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationRepository);
        
        const notification = new Notification({
            category: "social",
            content: new Content("Teste"),
            recipientId: "example"
        });

        await notificationRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id
        });

        expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date))
    })

    it("should not be able to read a Notification that was not created", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationRepository);

        const cancelPromisse = readNotification.execute({
            notificationId: "not-created"
        });

        expect(cancelPromisse).rejects.toThrow(NotificationNotFound)
    })
})