import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';
import { Organizer } from 'src/app/shared/models/Organizer';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-organizer-profile-page',
  templateUrl: './organizer-profile-page.component.html',
  styleUrls: ['./organizer-profile-page.component.css']
})
export class OrganizerProfilePageComponent implements OnInit{
  user!: User;
  organizer!: Organizer;

  constructor(private userService:UserService, private organizerService: OrganizerService) {
    userService.userObservable.subscribe((currentUser) => {
      this.user = currentUser;
    })

    organizerService.getOrganizerByUserId(this.user.id).subscribe((organizer) => {
      this.organizer = organizer;
    })
  }

  ngOnInit(): void {
    
  }

}
