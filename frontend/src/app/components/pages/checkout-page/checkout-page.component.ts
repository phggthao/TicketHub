import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(cartService: CartService, 
              private formBuilder: FormBuilder,
              private userService: UserService, 
              private toastrService: ToastrService,
              private orderService: OrderService,
              private router: Router) {
                const cart = cartService.getCart();
                for (let item of cart.items){
                  if (item.quantity > 0) this.order.items.push(item);
                }
                this.order.totalPrice = cart.totalPrice;
              }

  ngOnInit(): void {
    let {name, phone, email} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      phone: [phone, Validators.required],
      email: [email, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder(){
    if (this.checkoutForm.invalid){
      this.toastrService.warning('Please fill all the required fields', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.phone = this.fc.phone.value;
    this.order.email = this.fc.email.value;

    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) => {
        this.toastrService.error(errorResponse, 'Error')
      }
    })
  }
}
