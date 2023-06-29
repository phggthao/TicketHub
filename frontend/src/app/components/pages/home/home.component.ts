import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.events = this.eventService.getAllEventsBySearchTerm(params.searchTerm);
      else if(params.tag)
        this.events = this.eventService.getAllEventsByTag(params.tag);
      else
        this.events = eventService.getAll();
    })
  }

  ngOnInit(): void {

  }
}
