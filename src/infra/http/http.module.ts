import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import CancelNotification from 'src/application/use-cases/cancel-notification';
import ReadNotification from 'src/application/use-cases/read-notification';
import UnReadNotification from 'src/application/use-cases/unread-notification';
import CountRecipientNotifications from 'src/application/use-cases/count-recipient-notifications';
import GetRecipientNotification from 'src/application/use-cases/get-recipient-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [    
    SendNotification,
     CancelNotification,
     ReadNotification, 
     UnReadNotification,
     CountRecipientNotifications,  
     GetRecipientNotification],  
})
export class HttpModule {}
