import { Ticket } from "./Ticket";

export class CartItem{
    constructor(public ticket:Ticket) { }
    quantity: number = 0;
    price: number = 0;
}