import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/shared/models/Event';
import { Organizer } from 'src/app/shared/models/Organizer';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit{
  organizer!: Organizer;
  events: Event[] = [];
  constructor(
    private userService:UserService, 
    private organizerService: OrganizerService,
    private eventService: EventService) {
      organizerService.getOrganizerByUser(this.userService.currentUser.id).subscribe(serverOrganizer => {
        this.organizer = serverOrganizer;
      });
      let eventsObservable: Observable<Event[]>;

      //eventsObservable = eventService.getAllEventsByOrganizer(this.organizer);
      eventsObservable = eventService.getAll();
      eventsObservable.subscribe((serverEvents) => {
        this.events = serverEvents;

        this.events.forEach((event,index)=>{
          if(event.organizer != this.organizer) this.events.splice(index,1);
        });
      })      
  }

  totalTicketQuantity(event:Event): Number {
    let ticketNum = 0;
    for (var ticket of event.tickets) {
      ticketNum += ticket.quantity;
    }

    return ticketNum;
  }

  maxRevenue(event: Event): Number {
    let maxRev = 0;
    for (var ticket of event.tickets) {
      maxRev += ticket.quantity * ticket.price;
    }
    return maxRev;
  }

  ngOnInit(): void {
  }
}
