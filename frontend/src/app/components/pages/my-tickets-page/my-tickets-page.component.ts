import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-my-tickets-page',
  templateUrl: './my-tickets-page.component.html',
  styleUrls: ['./my-tickets-page.component.css']
})
export class MyTicketsPageComponent implements OnInit{
  user!: User;
  orders: Order[] = [];
  constructor(userService:UserService, orderService: OrderService) {
    let ordersObservable: Observable<Order[]>;

    userService.userObservable.subscribe((currentUser) => {
      this.user = currentUser;
    })
    ordersObservable = orderService.trackOrdersByUser(this.user.id);
    ordersObservable.subscribe((serverOrders) => {
      this.orders = serverOrders;
    })
  }

  ngOnInit(): void {
  }
}
