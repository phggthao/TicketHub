import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  @Input()
  menu1!: string;

  @Input()
  menu2!: string;

  @Input()
  menu3!: string;

  @Input()
  router1!: string;

  @Input()
  router2!: string;

  @Input()
  router3!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
}
