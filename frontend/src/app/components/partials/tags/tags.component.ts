import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(eventService:EventService) {
    this.tags = eventService.getAllTags();
  }

  ngOnInit(): void {
  }
}
