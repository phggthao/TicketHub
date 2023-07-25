import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Organizer } from '../shared/models/Organizer';
import { ORGANIZER_PROFILE_URL, ORGANIZER_REGISTER_URL } from '../shared/constants/urls';

const ORGANIZER_KEY = 'Organizer';
@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private organizerSubject = new BehaviorSubject<Organizer>(this.getOrganizerFromLocalStorage());
  public organizerObservable:Observable<Organizer>;

  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.organizerObservable = this.organizerSubject.asObservable();
  }

  public get currentOrganizer(): Organizer{
    return this.organizerSubject.value;
  }

  register(organizer: Organizer): Observable<Organizer> {
    return this.http.post<Organizer>(ORGANIZER_REGISTER_URL, organizer).pipe(
      tap({
        next: (organizer) => {
          this.setOrganizerToLocalStorage(organizer);
          this.organizerSubject.next(organizer);
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

  getOrganizerById(organizerId:string): Observable<Organizer>{
    return this.http.get<Organizer>(ORGANIZER_PROFILE_URL + organizerId);
  }

  private setOrganizerToLocalStorage(organizer:Organizer){
    localStorage.setItem(ORGANIZER_KEY, JSON.stringify(organizer));
  }

  private getOrganizerFromLocalStorage(): Organizer{
    const organizerJson = localStorage.getItem(ORGANIZER_KEY);
    if(organizerJson) return JSON.parse(organizerJson) as Organizer;
    return new Organizer();
  }
}
