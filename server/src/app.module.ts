import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/assignment-app', { useNewUrlParser: true }), CustomerModule, MessagesModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
