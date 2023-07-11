import { Schema, model } from "mongoose";
import { Ticket, TicketSchema } from "./ticket.model";

export interface Event{
    id: string;
    name: string;
    organizer: string;
    location: string;
    date: string;
    categories: string[];
    description: string;
    imageUrl: string;
    favorite: boolean;
    ticket: Ticket[];
}

export const EventSchema = new Schema<Event>(
    {
        name: {type:String, required:true},
        organizer: {type:String, required:true},
        location: {type:String, required:true},
        date: {type:String, required:true},
        categories: {type:[String]},
        description: {type:String, required:true},
        imageUrl: {type:String, required:true},
        favorite: {type:Boolean, default:false},
        ticket: {type:[TicketSchema], required:true},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const EventModel = model<Event>('event', EventSchema);