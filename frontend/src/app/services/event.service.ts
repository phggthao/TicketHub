import { Injectable } from '@angular/core';
import { Event } from '../shared/models/Event';
import { Category } from '../shared/models/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EVENTS_BY_CATEGORY_URL, EVENTS_BY_SEARCH_URL, EVENT_CATEGORIES_URL, EVENTS_URL, EVENT_BY_ID_URL } from '../shared/constants/urls';
 
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Event[]>{
    return this.http.get<Event[]>(EVENTS_URL);
  }

  getAllEventsBySearchTerm(searchTerm:string): Observable<Event[]>{
    return this.http.get<Event[]>(EVENTS_BY_SEARCH_URL + searchTerm);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(EVENT_CATEGORIES_URL);
  }

  getAllEventsByCategory(category:string): Observable<Event[]>{
    return category === "All" ?
      this.getAll() :
      this.http.get<Event[]>(EVENTS_BY_CATEGORY_URL + category);
  }

  getEventById(eventId:string): Observable<Event>{
    return this.http.get<Event>(EVENT_BY_ID_URL + eventId);
  }
}
