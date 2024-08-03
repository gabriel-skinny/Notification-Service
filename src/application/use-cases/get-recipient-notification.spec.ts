import { makeNotification } from "../../../test/factories/notification-factory";
import InMemoryNotificationsRepository from "../repositories/in-memory-repository";
import CountRecipientNotifications from "./count-recipient-notifications";
import GetRecipientNotification from "./get-recipient-notification";


describe("Get Recipient Notifications Use Case", () => {
    it("should be able get all notification from a recipient", async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const getRecipientNotification = new GetRecipientNotification(notificationRepository);

        const recipientId = "Teste_Id";
        await notificationRepository.create(makeNotification({ recipientId }));
        await notificationRepository.create(makeNotification({ recipientId }));
        await notificationRepository.create(makeNotification());

        const { notifications } = await getRecipientNotification.execute({
            recipientId
        });
       
        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId }),
            expect.objectContaining({ recipientId })
        ]))
       
    })
})