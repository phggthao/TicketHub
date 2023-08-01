import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrganizerService } from 'src/app/services/organizer.service';
import { Event } from 'src/app/shared/models/Event';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent{
  event:Event = new Event();
  eventForm!: FormGroup;
  ticketForm!: FormGroup;
  isSubmitted: boolean = false;
  ticketNum: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private organizerService: OrganizerService) {
      this.event.organizer = organizerService.currentOrganizer;

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

  get tfc() {
    return this.newTicket().controls;
  }

  submit() {  
    this.isSubmitted = true;
    console.log(this.eventForm.value);  
  } 
}
