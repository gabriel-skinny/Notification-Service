import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './primsa.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getHello() {
    return this.prismaService.notification.create({ data: { id: "1", category: "1231", content: "12", recipientId: "12"}})
  }
}
