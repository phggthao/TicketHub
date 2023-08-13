import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/shared/models/Event';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent{
  event:Event = new Event();
  eventForm!: FormGroup;
  isSubmitted: boolean = false;
  ticketNum: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private organizerService: OrganizerService,
    private eventService: EventService,
    private userService: UserService,
    private router: Router) {
      organizerService.getOrganizerByUser(this.userService.currentUser.id).subscribe(serverOrganizer => {
        this.event.organizer = serverOrganizer;
      });

      this.eventForm = this.formBuilder.group({  
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
        location: ['', Validators.required],
        venue: ['', Validators.required],
        date: ['', Validators.required],
        categories: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(10)]],
        imageUrl: '',  
        tickets: this.formBuilder.array([])  
      }); 

      this.addTicket();
    }
    
  tickets() : FormArray {  
    return this.eventForm.get("tickets") as FormArray  
  }  
     
  newTicket(): FormGroup {  
    return this.formBuilder.group({ 
      class: ['', Validators.required], 
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    })  
  }  
  
  addTicket() {  
    this.ticketNum++;
    this.tickets().push(this.newTicket());  
  }  
     
  removeTicket(i:number) {  
    this.ticketNum--;
    this.tickets().removeAt(i);  
  }  
     
  get efc() {
    return this.eventForm.controls;
  }

  tfc(i:number) {
    const ticket = this.tickets().at(i) as FormGroup;
    return ticket.controls;
  }

  preview(){
    if (this.eventForm.invalid){
      this.toastrService.warning('Please fill all the required fields', 'Invalid Inputs');
      return;
    }
    else {
      const fv = this.eventForm.value;
      this.event.name = fv.name;
      this.event.location = fv.location;
      this.event.venue = fv.venue;
      this.event.date = fv.date;
      this.event.categories = fv.categories;
      this.event.description = fv.description;
      this.event.imageUrl = fv.imageUrl;  
      this.event.tickets = fv.tickets;
      this.isSubmitted = true;
    } 
  }

  createEvent() {
    this.isSubmitted = true;
    if (this.eventForm.invalid){
      this.toastrService.warning('Please fill all the required fields', 'Invalid Inputs');
      return;
    }

    const fv = this.eventForm.value;
    this.event.name = fv.name;
    this.event.location = fv.location;
    this.event.venue = fv.venue;
    this.event.date = fv.date;
    this.event.categories = fv.categories;
    this.event.description = fv.description;
    this.event.imageUrl = fv.imageUrl;  
    this.event.tickets = fv.tickets;

    console.log(this.event);

    this.eventService.create(this.event).subscribe({
      next:() => {
        this.router.navigateByUrl('/');
        this.toastrService.success(
          'Event Created Successfully',
          'Success'
        );
      },
      error:(errorResponse) => {
        this.toastrService.error(errorResponse, 'Error')
      }
    })
  }
}
