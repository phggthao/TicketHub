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

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'search/:searchTerm', component:HomeComponent },
  { path:'category/:category', component:HomeComponent },
  { path:'event/:id', component:EventPageComponent },
  { path:'event/:id/select-ticket', component:SelectTicketPageComponent, canActivate:[AuthGuard] },
  { path:'event/:id/checkout', component:CheckoutPageComponent, canActivate:[AuthGuard] },
  { path:'event/:id/finish-booking', component:FinishBookingPageComponent, canActivate:[AuthGuard] },
  { path:'login', component:LoginPageComponent },
  { path:'register', component:RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
