import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Event } from '../shared/models/Event';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  getAllTickets(event: Event):void {
    for (var ticket of event.ticket) {
      this.cart.items.push(new CartItem(ticket));
    }
  }

  getCartPrice():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  }

  incrementQuantity(ticketID: string) {
    let cartItem = this.cart.items.find(item => item.ticket.id === ticketID);
    if(!cartItem) return;

    cartItem.quantity++;
    cartItem.price += cartItem.ticket.price;
    this.getCartPrice();
  }

  decrementQuantity(ticketID: string) {
    let cartItem = this.cart.items.find(item => item.ticket.id === ticketID);
    if(!cartItem) return;

    else if(cartItem.quantity>0) {
      cartItem.quantity--;
      cartItem.price -= cartItem.ticket.price;
    }

    this.getCartPrice();
  }

  clearCart(){
    this.cart = new Cart();
  }

  getCartObservable():Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}
 