import {model, Schema, Types} from "mongoose";
import { Ticket, TicketSchema } from "./ticket.model";
import { OrderStatus} from "../constants/order_status";

export interface OrderItem{
    ticket: Ticket;
    quantity: number;
    price: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        ticket: {type: TicketSchema, required: true},
        quantity: {type: Number, required: true},
        price: {type: Number, required: true}
    }
);

export interface Order{
    id: number;
    event: Types.ObjectId;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    email: string;
    phone: string;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updateAt: Date
}

const OrderSchema = new Schema<Order>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    paymentId: {type: String},
    totalPrice: {type: Number, required: true},
    items: {type: [OrderItemSchema], required: true},
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true},
    event: {type: Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const OrderModel = model('order', OrderSchema);