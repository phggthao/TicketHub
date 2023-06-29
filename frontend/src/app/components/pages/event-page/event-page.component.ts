import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/Event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event!: Event;
  constructor(activatedRoute:ActivatedRoute, eventService:EventService, private cartService: CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.event = eventService.getEventById(params.id);
    })
  }

  ngOnInit(): void {
  }

  buyTicket(){
    //this.cartService.clearCart();
    this.cartService.getAllTickets(this.event);
    this.router.navigateByUrl('/event/'+ this.event.id +'/select-ticket');
  }
}
