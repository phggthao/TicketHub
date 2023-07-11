import { Schema, model } from "mongoose";

export interface Ticket{
    id: string;
    class: string;
    quantity: number;
    price: number;
    description: string;
}

export const TicketSchema = new Schema<Ticket>(
    {
        class: {type:String, required:true},
        quantity: {type:Number, required:true},
        price: {type:Number, required:true},
        description: {type:String, required:true},
        
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

export const TicketModel = model<Ticket>('ticket', TicketSchema);