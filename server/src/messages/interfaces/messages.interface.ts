import { Document } from 'mongoose';

export interface Messages extends Document {
    readonly text: String;
    readonly auther: String;
    readonly replies: [];
    readonly created_at: Date;
}