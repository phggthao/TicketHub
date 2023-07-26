import { CartItem } from "./CartItem";
import { Event } from "./Event";

export class Order{
    id!: number;
    event!: Event;
    items: CartItem[] = [];
    totalPrice!: number;
    name!: string;
    email!: string;
    phone!: string;
    paymentId!: string;
    createdAt!: string;
    status!: string;
}