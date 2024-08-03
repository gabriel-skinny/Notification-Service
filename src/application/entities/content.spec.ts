import { Content } from "./content"
describe("Notification content", () => {
    it("should be able to create Notification content", () => {
        const content = new Content("Voce recebeu uma solicitação de amizade");

        expect(content).toBeTruthy();
    })

    it("should not be able to create Notification content with less than 5 caracthers", () => {
        const smallString = "ab";

        expect(() => new Content(smallString)).toThrow();
    })

    it("should not be able to create Notification content with more than 248 caracthers", () => {
        const bigString = "s".repeat(260);

        expect(() => new Content(bigString)).toThrow();
    })
})