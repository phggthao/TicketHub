import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Event } from '../shared/models/Event';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  getAllTickets(event: Event):void {
    this.clearCart();
    for (var ticket of event.ticket) {
      this.cart.items.push(new CartItem(ticket));
    }
    this.setCartToLocalStorage();
  }

  incrementQuantity(ticketID: string) {
    let cartItem = this.cart.items.find(item => item.ticket.id === ticketID);
    if(!cartItem) return;

    cartItem.quantity++;
    cartItem.price += cartItem.ticket.price;
    this.setCartToLocalStorage();
  }

  decrementQuantity(ticketID: string) {
    let cartItem = this.cart.items.find(item => item.ticket.id === ticketID);
    if(!cartItem) return;

    else if(cartItem.quantity>0) {
      cartItem.quantity--;
      cartItem.price -= cartItem.ticket.price;
    }

    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart(); 
  }
}
