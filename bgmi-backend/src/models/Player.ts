import mongoose, { Document, Schema } from 'mongoose';

export interface IPlayer extends Document {
  username: string;
  email: string;
  phone: string;
  team?: string;
  level: number;
  experience?: string;
}

const PlayerSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  team: { type: String },
  level: { type: Number, required: true },
  experience: { type: String },
});

export const Player = mongoose.model<IPlayer>('Player', PlayerSchema);