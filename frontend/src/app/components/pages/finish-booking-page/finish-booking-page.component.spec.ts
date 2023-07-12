import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishBookingPageComponent } from './finish-booking-page.component';

describe('FinishBookingPageComponent', () => {
  let component: FinishBookingPageComponent;
  let fixture: ComponentFixture<FinishBookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishBookingPageComponent]
    });
    fixture = TestBed.createComponent(FinishBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
