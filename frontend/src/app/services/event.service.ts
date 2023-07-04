import { Injectable } from '@angular/core';
import { Event } from '../shared/models/Event';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EVENTS_BY_CATEGORY_URL, EVENTS_BY_SEARCH_URL, EVENTS_CATEGORIES_URL, EVENTS_URL, EVENT_BY_ID_URL } from '../shared/constants/urls';
 
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

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(EVENTS_CATEGORIES_URL);
  }

  getAllEventsByTag(tag:string): Observable<Event[]>{
    return tag === "All" ?
      this.getAll() :
      this.http.get<Event[]>(EVENTS_BY_CATEGORY_URL + tag);
  }

  getEventById(eventId:string): Observable<Event>{
    return this.http.get<Event>(EVENT_BY_ID_URL + eventId);
  }
}
