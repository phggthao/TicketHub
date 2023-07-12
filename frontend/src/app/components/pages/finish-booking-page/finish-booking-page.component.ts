import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-finish-booking-page',
  templateUrl: './finish-booking-page.component.html',
  styleUrls: ['./finish-booking-page.component.css']
})
export class FinishBookingPageComponent implements OnInit {
  order: Order = new Order();
  constructor(orderService: OrderService, router: Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error:() => {
        router.navigateByUrl('/checkout');
      }
    })
  }

  ngOnInit(): void {
  }

}