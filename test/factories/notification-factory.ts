import { Content } from "../../src/application/entities/content";
import { Notification, NotificationProps } from "../../src/application/entities/Notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: "social",
        content: new Content("Teste"),
        recipientId: "Diferent",
        ...override
    });
}