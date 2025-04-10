import { model, Schema } from 'mongoose';
import { TEvent } from './event.interface';

const eventSchema = new Schema<TEvent>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    eventImg: {
      type: String,
    },
    eventHost: {
      type: String,
      required: true,
    },
  
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);


export const Event = model<TEvent>('Event', eventSchema);
