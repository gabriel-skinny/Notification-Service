import { Replace } from "src/helpers/replace";
import { Content } from "./content";
import { randomUUID } from "crypto";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date}>, id?: string) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get id() {
        return this._id;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content() {
        return this.props.content;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get recipientId() {
        return this.props.recipientId;
    }

    public set category(category: string) {
        this.props.category = category;
    }

    public get category() {
        return this.props.category;
    }

    public set readAt(readAt: Date) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null| undefined {
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public cancel() {
        this.props.canceledAt = new Date();
    }

    public read() {
        this.props.readAt = new Date();
    }

    public unRead() {
        this.props.readAt = null;
    }
    
    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }
}