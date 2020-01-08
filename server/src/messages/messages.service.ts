import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Messages } from './interfaces/messages.interface';
import { CreateMessagesDTO } from './dto/create-messages.dto';

@Injectable()
export class MessagesService {

    constructor(@InjectModel('Messages') private readonly messagesModel: Model<Messages>) { }

    // fetch all messages
    async getAllMessage(): Promise<Messages[]> {
        const messages = await this.messagesModel.find().exec();
        return messages;
    }

    // Get a single message
    async getMessage(messageID): Promise<Messages> {
        const message = await this.messagesModel.findById(messageID).exec();
        return message;
    }
    
    // post a single message
    async addMessage(CreateMessagesDTO: CreateMessagesDTO): Promise<Messages> {
        const newMessage = await new this.messagesModel(CreateMessagesDTO);
        return newMessage.save();
    }
    
    // Edit message details
    async updateMessage(messageID, CreateMessagesDTO: CreateMessagesDTO): Promise<Messages> {
        const updatedMessage = await this.messagesModel
            .findByIdAndUpdate(messageID, CreateMessagesDTO, { new: true });
        return updatedMessage;
    }

    async updateReplies(messageID, CreateMessagesDTO: CreateMessagesDTO): Promise<Messages> {
        const updatedMessage = await this.messagesModel
            .update(messageID, {$push: {'replies': CreateMessagesDTO.reply}});
        return updatedMessage;
    }

    // Delete a message
    async deleteMessage(messageID): Promise<any> {
        const deletedMessage = await this.messagesModel.findByIdAndRemove(messageID);
        return deletedMessage;
    }
}
