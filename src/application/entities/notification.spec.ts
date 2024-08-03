import { Content } from "./content"
import { Notification } from "./Notification";
describe("Notification", () => {
    it("should be able to create Notification", () => {
        const notification = new Notification({
            category: "Categoria",
            content: new Content("string"),
            recipientId: "12",
        });

        expect(notification).toBeTruthy();
    })
})