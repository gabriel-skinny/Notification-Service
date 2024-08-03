import { makeNotification } from "../../../test/factories/notification-factory";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import CountRecipientNotifications from "./count-recipient-notifications";


describe("Count Recipient Notifications Use Case", () => {
    it("should be able to count all Notifications from a recipient", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const countRecipientNotification = new CountRecipientNotifications(notificationRepository);

        const recipientId = "Teste_Id";
        await notificationRepository.create(makeNotification({ recipientId }));
        await notificationRepository.create(makeNotification({ recipientId }));
        await notificationRepository.create(makeNotification());

        const { count } = await countRecipientNotification.execute({
            recipientId
        });

        expect(count).toBe(2);
    })
})