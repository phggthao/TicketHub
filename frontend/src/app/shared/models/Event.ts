import { Organizer } from "./Organizer";
import { Ticket } from "./Ticket";

export class Event{
    id!: string;
    name!: string;
    organizer!: Organizer;
    location!: string;
    venue!: string;
    date!: string;
    categories!: string[];
    description!: string;
    imageUrl!: string;
    favorite!: boolean;
    tickets!: Ticket[];
}