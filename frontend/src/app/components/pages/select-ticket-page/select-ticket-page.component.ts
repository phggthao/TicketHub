import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Event } from 'src/app/shared/models/Event';

@Component({
  selector: 'app-select-ticket-page',
  templateUrl: './select-ticket-page.component.html',
  styleUrls: ['./select-ticket-page.component.css']
})
export class SelectTicketPageComponent implements OnInit {
  event!:Event;
  cart!:Cart;
  
  constructor(activatedRoute:ActivatedRoute, eventService:EventService, private cartService: CartService, private router:Router) {
    this.cartService.getCartObservable().subscribe((cart)=> {
      this.cart = cart;
    })
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        eventService.getEventById(params.id).subscribe(serverEvent => {
          this.event = serverEvent;
        });
    })
  }

  ngOnInit(): void {
  }

  incrementQuantity(cartItem:CartItem) {
    this.cartService.incrementQuantity(cartItem.ticket.id);
  }

  decrementQuantity(cartItem:CartItem) {
    this.cartService.decrementQuantity(cartItem.ticket.id);
  }

  checkout(){
    this.router.navigateByUrl('/event/'+ this.event.id +'/checkout');
  }
}
