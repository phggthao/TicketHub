import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { SelectTicketPageComponent } from './components/pages/select-ticket-page/select-ticket-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { FinishBookingPageComponent } from './components/pages/finish-booking-page/finish-booking-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { OrganizerRegisterPageComponent } from './components/pages/organizer-register-page/organizer-register-page.component';
import { MyTicketsPageComponent } from './components/pages/my-tickets-page/my-tickets-page.component';
import { OrganizerProfilePageComponent } from './components/pages/organizer-profile-page/organizer-profile-page.component';
import { CreateEventPageComponent } from './components/pages/create-event-page/create-event-page.component';
import { MyEventsComponent } from './components/pages/my-events/my-events.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'search/:searchTerm', component:HomeComponent },
  { path:'category/:category', component:HomeComponent },
  { path:'event/:id', component:EventPageComponent },
  { path:'event/:id/select-ticket', component:SelectTicketPageComponent, canActivate:[AuthGuard] },
  { path:'event/:id/checkout', component:CheckoutPageComponent, canActivate:[AuthGuard] },
  { path:'event/:id/finish-booking', component:FinishBookingPageComponent, canActivate:[AuthGuard] },
  { path:'create-event', component:CreateEventPageComponent, canActivate:[AuthGuard] },
  { path:'login', component:LoginPageComponent },
  { path:'register', component:RegisterPageComponent },
  { path:'profile', component:ProfilePageComponent, canActivate:[AuthGuard] },
  { path:'my-tickets', component:MyTicketsPageComponent, canActivate:[AuthGuard] },
  { path:'order/:orderId', component:OrderTrackPageComponent, canActivate:[AuthGuard] },
  { path:'organizer/register', component:OrganizerRegisterPageComponent, canActivate:[AuthGuard] },
  { path:'organizer/profile', component:OrganizerProfilePageComponent, canActivate:[AuthGuard] },
  { path:'organizer/my-events', component:MyEventsComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
