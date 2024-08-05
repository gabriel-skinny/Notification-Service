import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';
import CancelNotification from 'src/application/use-cases/cancel-notification';
import ReadNotification from 'src/application/use-cases/read-notification';
import UnReadNotification from 'src/application/use-cases/unread-notification';
import CountRecipientNotifications from 'src/application/use-cases/count-recipient-notifications';
import GetRecipientNotification from 'src/application/use-cases/get-recipient-notification';

@Controller()
export class NotificationController {
  constructor(
    private readonly sendNotificationUseCase: SendNotification,
    private readonly cancelNotification: CancelNotification,
    private readonly readNotification: ReadNotification,
    private readonly unReadNotification: UnReadNotification,
    private readonly countRecipientNotification: CountRecipientNotifications,
    private readonly getRecipientNotification: GetRecipientNotification,
  ) {}

  @Patch(":id/cancel")
  async cancel(@Param("id") id: string) {
    await this.cancelNotification.execute({
      notificationId: id
    })
  
    return { sucess: true }
  }

  @Get("count/from/:recipientId")
  async countFromRecipient(@Param("recipientId") recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId
    });
  
    return { count }
  }

  @Get("many/from/:recipientId")
  async getFromRecipient(@Param("recipientId") recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId
    })
  
    return { notifications: notifications.map(NotificationViewModel.toHttp) }
  }

  @Patch(":id/unread")
  async unRead(@Param("id") id: string) {
    await this.unReadNotification.execute({
      notificationId: id
    })
  
    return { sucess: true }
  }

  @Patch(":id/read")
  async read(@Param("id") id: string) {
    await this.readNotification.execute({
      notificationId: id
    })
  
    return { sucess: true }
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      category,
      recipientId,
      content
    });
  
    return { notification: NotificationViewModel.toHttp(notification) }
  }
}
