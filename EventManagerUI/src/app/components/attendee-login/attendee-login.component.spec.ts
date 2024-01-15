import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeLoginComponent } from './attendee-login.component';

describe('AttendeeLoginComponent', () => {
  let component: AttendeeLoginComponent;
  let fixture: ComponentFixture<AttendeeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendeeLoginComponent]
    });
    fixture = TestBed.createComponent(AttendeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
