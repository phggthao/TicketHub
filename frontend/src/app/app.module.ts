import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { CategoriesComponent } from './components/partials/categories/categories.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { SelectTicketPageComponent } from './components/pages/select-ticket-page/select-ticket-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FinishBookingPageComponent } from './components/pages/finish-booking-page/finish-booking-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { PaypalButtonComponent } from './components/partials/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { CarouselComponent } from './components/partials/carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { OrganizerRegisterPageComponent } from './components/pages/organizer-register-page/organizer-register-page.component';
import { SideNavComponent } from './components/partials/side-nav/side-nav.component';
import { MyTicketsPageComponent } from './components/pages/my-tickets-page/my-tickets-page.component';
import { OrganizerProfilePageComponent } from './components/pages/organizer-profile-page/organizer-profile-page.component';
import { CreateEventPageComponent } from './components/pages/create-event-page/create-event-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { MyEventsComponent } from './components/pages/my-events/my-events.component';
import { PreviewEventComponent } from './components/pages/preview-event/preview-event.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CategoriesComponent,
    EventPageComponent,
    SelectTicketPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    FinishBookingPageComponent,
    ProfilePageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    CarouselComponent,
    OrganizerRegisterPageComponent,
    SideNavComponent,
    MyTicketsPageComponent,
    OrganizerProfilePageComponent,
    CreateEventPageComponent,
    MyEventsComponent,
    PreviewEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    }),
    LottieModule.forRoot({player: playerFactory}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
