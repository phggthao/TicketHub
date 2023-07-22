import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-finish-booking-page',
  templateUrl: './finish-booking-page.component.html',
  styleUrls: ['./finish-booking-page.component.css']
})
export class FinishBookingPageComponent implements OnInit {
  order: Order = new Order();
  constructor() {
  }

  ngOnInit(): void {
  }

}
