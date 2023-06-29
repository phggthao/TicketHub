import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-select-ticket-page',
  templateUrl: './select-ticket-page.component.html',
  styleUrls: ['./select-ticket-page.component.css']
})
export class SelectTicketPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart)=> {
      this.cart = cart;
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
}
