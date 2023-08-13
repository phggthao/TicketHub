import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEventComponent } from './preview-event.component';

describe('PreviewEventComponent', () => {
  let component: PreviewEventComponent;
  let fixture: ComponentFixture<PreviewEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewEventComponent]
    });
    fixture = TestBed.createComponent(PreviewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
