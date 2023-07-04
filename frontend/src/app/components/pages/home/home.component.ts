import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events:Event[] = [];
  constructor(private eventService:EventService, activatedRoute:ActivatedRoute) {
    let eventsObservable:Observable<Event[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        eventsObservable = this.eventService.getAllEventsBySearchTerm(params.searchTerm);
      else if(params.tag)
        eventsObservable = this.eventService.getAllEventsByTag(params.tag);
      else
        eventsObservable = eventService.getAll();
 
      eventsObservable.subscribe((serverEvents) => {
        this.events = serverEvents;
      })
    })
  }

  ngOnInit(): void {

  }
}
