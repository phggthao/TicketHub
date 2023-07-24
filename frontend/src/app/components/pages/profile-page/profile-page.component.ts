import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  user!: User;
  orders: Order[] = [];
  constructor(userService:UserService, activatedRoute: ActivatedRoute, orderService: OrderService) {
    let ordersObservable: Observable<Order[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        userService.getUserById(params.id).subscribe(serverUser => {
          this.user = serverUser;
          ordersObservable = orderService.trackOrdersByUser(this.user.id);
          ordersObservable.subscribe((serverOrders) => {
            this.orders = serverOrders;
          })
        });
    })
  }

  ngOnInit(): void {
  }
}
