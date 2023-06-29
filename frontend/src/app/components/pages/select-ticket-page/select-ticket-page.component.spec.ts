import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTicketPageComponent } from './select-ticket-page.component';

describe('SelectTicketPageComponent', () => {
  let component: SelectTicketPageComponent;
  let fixture: ComponentFixture<SelectTicketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTicketPageComponent]
    });
    fixture = TestBed.createComponent(SelectTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
