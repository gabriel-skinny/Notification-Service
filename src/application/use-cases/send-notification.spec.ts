import { Content } from "../entities/content";
import { Notification } from "../entities/Notification";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import { SendNotification } from "./send-notification";

describe("Send-Notification Use Case", () => {
    it("should be able to send a Notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationRepository);
        
        const { notification } = await sendNotification.execute({
            category: "Categoria",
            content: "string",
            recipientId: "12",
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notification).toEqual(notificationRepository.notifications[0]);
    })
})