import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessagesDTO } from './dto/create-messages.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) { }

    // add a message
    @Post('/create')
    async addMessage(@Res() res, @Body() createmessagesDTO: CreateMessagesDTO) {
        const messages = await this.messagesService.addMessage(createmessagesDTO);
        return res.status(HttpStatus.OK).json({
            message: "Message has been created successfully",
            messages
        })
    }

    @Put('/reply')
    async updateReplies(@Res() res, @Query('messageID') messageID, @Body() createMessagesDTO: CreateMessagesDTO) {
        const messages = await this.messagesService.updateReplies(messageID, createMessagesDTO);
        if (!messages) throw new NotFoundException('Message does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Reply added successfully',
            messages
        });
    }
    // Retrieve messages list
    @Get('messages')
    async getAllMessage(@Res() res) {
        const messages = await this.messagesService.getAllMessage();
        return res.status(HttpStatus.OK).json(messages);
    }

    // Fetch a particular message using ID
    @Get('message/:messageID')
    async getMessage(@Res() res, @Param('messageID') messageID) {
        const message = await this.messagesService.getMessage(messageID);
        if (!message) throw new NotFoundException('message does not exist!');
        return res.status(HttpStatus.OK).json(message);
    }

    // Update a message's details
    @Put('/update')
    async updateMessage(@Res() res, @Query('messageID') messageID, @Body() createMessagesDTO: CreateMessagesDTO) {
        const messages = await this.messagesService.updateMessage(messageID, createMessagesDTO);
        if (!messages) throw new NotFoundException('message does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Message has been successfully updated',
            messages
        });
    }

    // Delete a message
    @Delete('/delete')
    async deleteMessage(@Res() res, @Query('messageID') messageID) {
        const messages = await this.messagesService.deleteMessage(messageID);
        if (!messages) throw new NotFoundException('message does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Message has been deleted',
            messages
        })
    }
}
