import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller()
export class NotificationController {
  constructor(private readonly sendNotificationUseCase: SendNotification) {}

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
