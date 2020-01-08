import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now }
})