import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';
import { Organizer } from 'src/app/shared/models/Organizer';

@Component({
  selector: 'app-organizer-profile-page',
  templateUrl: './organizer-profile-page.component.html',
  styleUrls: ['./organizer-profile-page.component.css']
})
export class OrganizerProfilePageComponent implements OnInit{
  organizer!: Organizer;

  constructor(private organizerService: OrganizerService, private userService: UserService,) {
    organizerService.getOrganizerByUser(this.userService.currentUser.id).subscribe(serverOrganizer => {
      this.organizer = serverOrganizer;
    });
  }

  ngOnInit(): void {
    
  }

}
