import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(userService:UserService) {
    userService.userObservable.subscribe((currentUser) => {
      this.user = currentUser;
    })
  }
  

  ngOnInit(): void {
  }
}
