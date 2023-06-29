import { Event } from  './app/shared/models/Event';
import { Tag } from './app/shared/models/Tag';
import { Ticket } from './app/shared/models/Ticket';

export const sample_tickets_1:Ticket[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 100,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 500,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_2:Ticket[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 100,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 500,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_3:Ticket[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 199,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'General Access Ticket',
        quantity: 4000,
        price: 169,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 100,
        price: 139,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_4:Ticket[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 199,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'General Access',
        quantity: 4000,
        price: 169,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 100,
        price: 139,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_5:Ticket[] = [
    { 
        id: '1',
        class: 'Standing Ticket',
        quantity: 5000,
        price: 169,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_events: Event[] = [
    {
        id: '1',
        name: 'Digitized uniform firmware',
        organizer: 'Pacheco, Collins and Kline',
        location: 'Ho Chi Minh City',
        date: '2023-07-01',
        category: 'Conference',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/lyly.jpg',
        favorite: false,
        ticket: sample_tickets_1,
    },
    {
        id: '2',
        name: 'Networked bifurcated throughput',
        organizer: 'Thompson-Jones',
        location: 'Hanoi',
        date: '2023-07-05',
        category: 'Workshop',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/organizer.jpg',
        favorite: true,
        ticket: sample_tickets_2,
    },
    {
        id: '3',
        name: 'HAY Glamping Music Festival',
        organizer: 'The BROS Entertainment',
        location: 'Hanoi',
        date: '2023-09-30',
        category: 'Live Concert',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/lyly.jpg',
        favorite: true,
        ticket: sample_tickets_3,
    },
    {
        id: '4',
        name: '8Wonder Music Festival',
        organizer: 'VinWonders',
        location: 'Nha Trang',
        date: '2023-07-22',
        category: 'Live Concert',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/organizer.jpg',
        favorite: false,
        ticket: sample_tickets_4,
    },
    {
        id: '5',
        name: 'City of Miracle Autumn Saigon',
        organizer: 'NTPMM Entertainment',
        location: 'Ho Chi Minh City',
        date: '2023-09-09',
        category: 'Live Concert',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/stage.jpg',
        favorite: true,
        ticket: sample_tickets_5,
    },
]

export const sample_tags:Tag[] = [
    { name: 'All', count: 5 },
    { name: 'Live Concert', count: 3 },
    { name: 'Workshop', count: 1 },
    { name: 'Conference', count: 1 },
]