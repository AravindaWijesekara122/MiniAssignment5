import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeDashboardComponent } from './attendee-dashboard.component';

describe('AttendeeDashboardComponent', () => {
  let component: AttendeeDashboardComponent;
  let fixture: ComponentFixture<AttendeeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendeeDashboardComponent]
    });
    fixture = TestBed.createComponent(AttendeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
