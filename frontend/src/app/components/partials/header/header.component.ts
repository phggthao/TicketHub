import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!:User;
  constructor(private userService:UserService, private router: Router) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }

  logOut() {
    this.userService.logOut();
  }

  createEventRouter() {
    if (!this.isOrganizer) this.router.navigateByUrl('/organizer/register');
    else this.router.navigateByUrl('/create-event');
  }

  get isAuth() {
    return this.user.token;
  }

  get isOrganizer() {
    return this.user.isOrganizer;
  }
}
