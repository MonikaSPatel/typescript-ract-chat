import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesSchema } from './schemas/messages.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Messages', schema: MessagesSchema }])
  ],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}
