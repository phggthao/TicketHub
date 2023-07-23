import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/Event';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Swiper } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  events: Event[] = [];

  constructor(private eventService:EventService, activatedRoute:ActivatedRoute) {
    let eventsObservable:Observable<Event[]>;
    activatedRoute.params.subscribe(() => {
      eventsObservable = eventService.getAll(); 
 
      eventsObservable.subscribe((serverEvents) => {
        this.events = serverEvents;        
      })
    })
  }
}
