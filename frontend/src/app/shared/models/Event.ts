import { Ticket } from "./Ticket";

export class Event{
    id!: string;
    name!: string;
    organizer!: string;
    location!: string;
    date!: string;
    categories!: string[];
    description!: string;
    imageUrl!: string;
    favorite!: boolean;
    ticket!: Ticket[];
}