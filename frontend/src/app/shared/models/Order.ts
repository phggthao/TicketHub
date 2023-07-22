import { CartItem } from "./CartItem";

export class Order{
    id!: number;
    eventId!: string;
    items: CartItem[] = [];
    totalPrice!: number;
    name!: string;
    email!: string;
    phone!: string;
    paymentId!: string;
    createdAt!: string;
    status!: string;
}