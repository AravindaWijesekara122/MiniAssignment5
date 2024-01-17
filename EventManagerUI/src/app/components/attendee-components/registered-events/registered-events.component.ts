import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendeeService } from 'src/app/services/attendee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registered-events',
  templateUrl: './registered-events.component.html',
  styleUrls: ['./registered-events.component.css']
})
export class RegisteredEventsComponent {
  registeredEvents: any[] = [];
  attendeeId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendeeService: AttendeeService,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    //this.attendeeId = this.route.snapshot.params['id'];
    this.attendeeId = this.authService.getAttendeeId();
    this.loadRegisteredEvents();
  }

  unregister(eventID: number): void {
    this.attendeeService.unregisterForEvent(eventID, this.attendeeId).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['attendee-dashboard/upcoming-events']);
      },
      error: (error) => {
        console.error('Error deleting event', error);
      }
    });
  }

  loadRegisteredEvents(): void {
    this.attendeeService.registeredEvents(this.attendeeId).subscribe({
      next: (events) => {
        console.log(events);
        this.registeredEvents = events;
      },
      error: (error) => {
        console.error('Error loading events', error);
      }
    });
  }

  
}
