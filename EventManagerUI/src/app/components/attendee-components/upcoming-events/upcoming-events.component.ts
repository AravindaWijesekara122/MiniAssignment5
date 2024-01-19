// upcoming-events.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendeeService } from 'src/app/services/attendee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  upcomingEvents: any[] = [];
  attendeeId = 0;

  constructor(
    private attendeeService: AttendeeService, 
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.attendeeId = this.authService.getAttendeeId();
    this.loadUpcomingEvents();
  }

  loadUpcomingEvents(): void {
    this.attendeeService.upcomingEvents().subscribe({
      next: (events) => {
        console.log(events);
        this.upcomingEvents = events;
      },
      error: (error) => {
        console.error('Error loading events', error);
      }
    });
  }

  register(eventID: number): void {
    this.attendeeService.registerForEvent(eventID, this.attendeeId).subscribe({
      next: (response) => {
        console.log(response);
        this.attendeeService.setRegistrationResponse(response);
        this.router.navigate(['register-confirmation']);
      },
      error: (error) => {
        console.error('Error registering for event', error);
      }
    });
  }

}
