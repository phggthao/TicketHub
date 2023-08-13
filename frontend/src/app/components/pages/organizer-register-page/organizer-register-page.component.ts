import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';
import { Organizer } from 'src/app/shared/models/Organizer';

@Component({
  selector: 'app-organizer-register-page',
  templateUrl: './organizer-register-page.component.html',
  styleUrls: ['./organizer-register-page.component.css']
})
export class OrganizerRegisterPageComponent implements OnInit{
  organizer: Organizer = new Organizer();
  organizerForm!: FormGroup;
  isSubmitted = false;

  returnUrl= ``;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private toastrService: ToastrService, private organizerService: OrganizerService) {}

  ngOnInit(): void {
    let { phone, email } = this.userService.currentUser;
    this.organizerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(75)]],
      phone: [phone, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.organizerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.organizerForm.invalid){
      this.toastrService.warning('Please fill all the required fields', 'Invalid Inputs');
      return;
    }
    
    this.organizer.name = this.organizerForm.value.name;
    this.organizer.phone = this.organizerForm.value.phone;
    this.organizer.email = this.organizerForm.value.email;
    this.organizer.city = this.organizerForm.value.city;
    this.organizer.district = this.organizerForm.value.district;
    this.organizer.ward = this.organizerForm.value.ward;
    this.organizer.address = this.organizerForm.value.address;

    this.organizerService.register(this.organizer).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
      this.toastrService.success('Please login again', 'Login again');
      this.userService.logOut();
    })
  }
}
