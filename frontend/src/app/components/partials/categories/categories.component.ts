import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories?:Category[];
  constructor(eventService:EventService) {
    eventService.getAllCategories().subscribe(serverCategories => {
      this.categories = serverCategories;
    });
  }

  ngOnInit(): void {
  }
}
