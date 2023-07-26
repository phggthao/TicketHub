import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { OrderService } from 'src/app/services/order.service';
import { Event } from 'src/app/shared/models/Event';
import { Order } from 'src/app/shared/models/Order';

declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit{
  event!: Event;

  @Input()
  order!: Order;

  @ViewChild('paypal', {static: true})
  paypalElement!: ElementRef;

  constructor(private orderService: OrderService,
    private cartService: CartService,
    private router:Router,
    private toastrService: ToastrService,
    activatedRoute:ActivatedRoute, 
    eventService:EventService) {
      activatedRoute.params.subscribe((params) => {
        if(params.id)
          eventService.getEventById(params.id).subscribe(serverEvent => {
            this.event = serverEvent;
          });
      })
    }

  ngOnInit(): void {
    const self = this;

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: self.order.totalPrice,
              },
            },
          ],
        });
      },

      onApprove: async (data: any, actions: any) => {
        const payment = await actions.order.capture();
        this.order.paymentId = payment.id;
        self.orderService.pay(this.order).subscribe({
          next: (orderId) => {
            this.cartService.clearCart();
            this.router.navigateByUrl('/event/'+ this.event.id + '/finish-booking');
            this.toastrService.success(
              'Payment Saved Successfully',
              'Success'
            );
          },
          error: (error) => {
            this.toastrService.error('Payment Save Failed', 'Error');
          }
        });
      },

      onError: (err: any) => {
        this.toastrService.error('Payment Failed', 'Error');
        console.log(err);
      },
    }).render(this.paypalElement.nativeElement);
  }
}
