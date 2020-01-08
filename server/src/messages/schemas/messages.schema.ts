import * as mongoose from 'mongoose';

export const MessagesSchema = new mongoose.Schema({
    text: String,
    auther: String,
    replies: { type : Array , default : []},
    created_at: { type: Date, default: Date.now }
})