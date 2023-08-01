import { ObjectId } from "mongodb"

export const sample_users: any[] = [
    {
        id: "1",
        name: "Nguyen Phuong Thao",
        email: "phgg.thao.28@gmail.com",
        password: "$2a$10$fjF6uJ0C/g9fzLXDMfBhTesi33iVMXPuGxl1fgQuaeUC0QjRO1X9m",
        phone: "0123456789",
        dob: "2001-09-28",
        avatarUrl: "assets/avatar.png",
        isOrganizer: true,
    },
    {
        id: "2",
        name: "Test 1",
        email: "test1@gmail.com",
        password: "$2a$10$fjF6uJ0C/g9fzLXDMfBhTesi33iVMXPuGxl1fgQuaeUC0QjRO1X9m",
        phone: "0123456788",
        dob: "2001-08-27",
        avatarUrl: "assets/avatar.png",
        isOrganizer: true,
    },
    {
        id: "3",
        name: "Test 2",
        email: "test2@gmail.com",
        password: "$2a$10$fjF6uJ0C/g9fzLXDMfBhTesi33iVMXPuGxl1fgQuaeUC0QjRO1X9m",
        phone: "0123456787",
        dob: "2001-08-24",
        avatarUrl: "assets/avatar.png",
        isOrganizer: false,
    },
]

export const sample_tickets_1:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 500,
        description: 'VIP priority check-in with exclusive merchandise',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 100,
        description: 'Normal entry, no merchandise',
    }
]

export const sample_tickets_2:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 50,
        price: 500,
        description: 'VIP priority check-in with exclusive merchandise',
    },
    { 
        id: '2',
        class: 'Normal Ticket',
        quantity: 50,
        price: 100,
        description: 'Normal entry, no merchandise',
    }
]

export const sample_tickets_3:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 199,
        description: 'VIP priority check-in with exclusive merchandise',
    },
    { 
        id: '2',
        class: 'General Access Ticket',
        quantity: 4000,
        price: 169,
        description: 'Normal entry, first come first serve, no merchandise',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 100,
        price: 139,
        description: 'Having all benefits of General Access tickets but with a much better price',
    }
]

export const sample_tickets_4:any[] = [
    { 
        id: '1',
        class: 'VIP Ticket',
        quantity: 500,
        price: 199,
        description: 'VIP priority check-in with exclusive merchandise',
    },
    { 
        id: '2',
        class: 'General Access',
        quantity: 4000,
        price: 169,
        description: 'Normal entry, first come first serve, no merchandise',
    },
    { 
        id: '3',
        class: 'Early Bird Ticket',
        quantity: 100,
        price: 139,
        description: 'Having all benefits of General Access tickets but with a much better price',
    }
]

export const sample_tickets_5:any[] = [
    { 
        id: '1',
        class: 'Standing Ticket',
        quantity: 5000,
        price: 169,
        description: 'Standing will have queue number, first come first serve',
    }
]

export const sample_events:any[] = [
    {
        id: '1',
        name: 'Digitized uniform firmware',
        organizer: {
            id: '1',
            name:"Test Test Test",
            email:"test3@gmail.com",
            phone:"0123456789",
            city:"Hanoi",
            district:"Bac Tu Liem",
            ward:"Co Nhue 1",
            address:"234 Pham Van Dong",
            user: new ObjectId('64ab0d0c59d687cd362fa8d7')
        },
        location: 'Ho Chi Minh City',
        venue: 'ABC Hotel',
        date: '2023-07-01',
        categories: ['Conference'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/lyly.jpg',
        favorite: false,
        tickets: sample_tickets_1,
    },
    {
        id: '2',
        name: 'Networked bifurcated throughput',
        organizer: {
            id:'2',
            name:"Test 111",
            email:"test1@gmail.com",
            phone:"0123456788",
            city:"123",
            district:"123",
            ward:"123",
            address:"123",
            user: new ObjectId('64ab0c9759d687cd362fa8c4')
        },
        location: 'Hanoi',
        venue: 'ABC Hotel',
        date: '2023-07-05',
        categories: ['Workshop'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/organizer.jpg',
        favorite: true,
        tickets: sample_tickets_2,
    },
    {
        id: '3',
        name: 'HAY Glamping Music Festival',
        organizer: {
            id:'3',
            name:"Tracie Nguyen",
            email:"phgg.thao.28@gmail.com",
            phone:"0123456789",
            city:"Hanoi",
            district:"Bac Tu Liem",
            ward:"Co Nhue 1",
            address:"234 Pham Van Dong",
            user:new ObjectId('64ab0c9759d687cd362fa8c3')
        },
        location: 'Hanoi',
        venue: 'Yen So Park',
        date: '2023-09-30',
        categories: ['Live Concert'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/lyly.jpg',
        favorite: true,
        tickets: sample_tickets_3,
    },
    {
        id: '4',
        name: '8Wonder Music Festival',
        organizer: {
            id:'4',
            name:"Test 4",
            email:"test4@gmail.com",
            phone:"0123456987",
            city:"test",
            district:"test",
            ward:"test",
            address:"test",
            user: new ObjectId('64aefe450595df86e3a066e0')
        },
        location: 'Nha Trang',
        venue: 'Vinpearl Nha Trang',
        date: '2023-07-22',
        categories: ['Live Concert'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/organizer.jpg',
        favorite: false,
        tickets: sample_tickets_4,
    },
    {
        id: '5',
        name: 'City of Miracle Autumn Saigon',
        organizer: {
            id: "5",
            name:"Test 5",
            email:"test5@gmail.com",
            phone:"0123456987",
            city:"test",
            district:"test",
            ward:"test",
            address:"test",
            user: new ObjectId('64af19598e7bcd8d636e815d')
        },
        location: 'Ho Chi Minh City',
        venue: 'Saigon Exhibition and Convention Center',
        date: '2023-09-09',
        categories: ['Live Concert'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageUrl: 'assets/cover/stage.jpg',
        favorite: true,
        tickets: sample_tickets_5,
    },
]

export const sample_categories:any[] = [
    { name: 'Live Concert', count: 3 },
    { name: 'Workshop', count: 1 },
    { name: 'Conference', count: 1 },
]