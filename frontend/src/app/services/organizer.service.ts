import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Organizer } from '../shared/models/Organizer';
import { ORGANIZER_BY_USER_URL, ORGANIZER_REGISTER_URL } from '../shared/constants/urls';

const ORGANIZER_KEY = 'Organizer';
@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  constructor(private http:HttpClient, private toastrService:ToastrService) {
  }

  register(organizer: Organizer): Observable<Organizer> {
    return this.http.post<Organizer>(ORGANIZER_REGISTER_URL, organizer).pipe(
      tap({
        next: () => {
          this.toastrService.success(
            'Register Successed',
            'You are now officially an event organizer of TicketHub'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Organizer Register Failed')
        }
      })
    )
  }

  getOrganizerByUser(userId:string): Observable<Organizer>{
    return this.http.get<Organizer>(ORGANIZER_BY_USER_URL + userId);
  }
}
