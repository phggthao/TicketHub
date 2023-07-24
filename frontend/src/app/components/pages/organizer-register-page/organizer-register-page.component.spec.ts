import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerRegisterPageComponent } from './organizer-register-page.component';

describe('OrganizerRegisterPageComponent', () => {
  let component: OrganizerRegisterPageComponent;
  let fixture: ComponentFixture<OrganizerRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerRegisterPageComponent]
    });
    fixture = TestBed.createComponent(OrganizerRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
