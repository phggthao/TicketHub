import { Injectable } from '@angular/core';
import { sample_events, sample_tags } from 'src/data';
import { Event } from '../shared/models/Event';
import { Tag } from '../shared/models/Tag';
 
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() { }

  getAll():Event[]{
    return sample_events;
  }

  getAllEventsBySearchTerm(searchTerm:string){
    return this.getAll().filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllEventsByTag(tag:string):Event[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(event => event.category?.includes(tag));
  }

  getEventById(eventId:string):Event{
    return this.getAll().find(event => event.id == eventId) ?? new Event();
  }
}
