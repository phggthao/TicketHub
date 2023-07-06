import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { SelectTicketPageComponent } from './components/pages/select-ticket-page/select-ticket-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'search/:searchTerm', component:HomeComponent },
  { path:'tag/:tag', component:HomeComponent },
  { path:'event/:id', component:EventPageComponent },
  { path:'event/:id/select-ticket', component:SelectTicketPageComponent },
  { path:'login', component:LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
