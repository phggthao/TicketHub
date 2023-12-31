import { Schema, Types, model } from "mongoose";
import { Ticket, TicketSchema } from "./ticket.model";
import { Organizer, OrganizerSchema } from "./organizer.model";

export interface Event{
    id: string;
    name: string;
    organizer: Organizer;
    location: string;
    venue: string;
    date: string;
    categories: string[];
    description: string;
    imageUrl: string;
    favorite: boolean;
    tickets: Ticket[];
}

export const EventSchema = new Schema<Event>(
    {
        name: {type:String, required:true},
        organizer: {type: OrganizerSchema, required:true, unique:false},
        location: {type:String, required:true},
        venue: {type:String, required:true},
        date: {type:String, required:true},
        categories: {type:[String]},
        description: {type:String, required:true},
        imageUrl: {type:String, required:true},
        favorite: {type:Boolean, default:false},
        tickets: {type:[TicketSchema], required:true},
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