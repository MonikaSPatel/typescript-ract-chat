import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly email: string;
    readonly password: string;
    readonly created_at: Date;
}