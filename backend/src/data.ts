export const sample_tickets_1:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 1000000,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 500000,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_2:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 1000000,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 500000,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_3:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 1999000,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'General Access Ticket',
        quantity: 400000,
        price: 169,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 299000,
        price: 139,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_4:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 1999000,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '2',
        class: 'General Access',
        quantity: 4000,
        price: 890000,
        description: 'Lorem Ipsum is simply dummy text',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 100,
        price: 690000,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_tickets_5:any[] = [
    { 
        id: '1',
        class: 'Standing Ticket',
        quantity: 5000,
        price: 599000,
        description: 'Lorem Ipsum is simply dummy text',
    }
]

export const sample_events:any[] = [
    {
        id: '1',
        name: 'Digitized uniform firmware',
        organizer: 'Pacheco, Collins and Kline',
        location: 'Ho Chi Minh City',
        date: '2023-07-01',
        categories: ['Conference'],
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
        categories: ['Workshop'],
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
        categories: ['Live Concert'],
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
        categories: ['Live Concert'],
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
        categories: ['Live Concert'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/stage.jpg',
        favorite: true,
        ticket: sample_tickets_5,
    },
]

export const sample_categories:any[] = [
    { name: 'Live Concert', count: 3 },
    { name: 'Workshop', count: 1 },
    { name: 'Conference', count: 1 },
]

export const sample_users: any[] = [
    {
        id: "1",
        name: "Nguyen Phuong Thao",
        email: "phgg.thao.28@gmail.com",
        password: "123",
        phone: "0123456789",
        dob: "2001-09-28",
        avatarUrl: "assets/avatar.png",
        isOrganizer: true,
    },
    {
        id: "2",
        name: "Test 1",
        email: "test1@gmail.com",
        password: "123",
        phone: "0123456788",
        dob: "2001-08-27",
        avatarUrl: "assets/avatar.png",
        isOrganizer: false,
    },
    {
        id: "3",
        name: "Test 2",
        email: "test2@gmail.com",
        password: "123",
        phone: "0123456787",
        dob: "2001-08-24",
        avatarUrl: "assets/avatar.png",
        isOrganizer: false,
    },
]