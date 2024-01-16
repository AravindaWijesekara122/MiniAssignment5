// event-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any | null = null;
  eventId = 0;

  constructor(
    private route: ActivatedRoute, 
    private organizerService: OrganizerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.loadEventDetails(this.eventId);
  }

  loadEventDetails(eventId: number): void {
    this.organizerService.getEventById(eventId).subscribe((event) => {
      console.log(event);
      this.event = event;
    });
  }

  updateEvent(): void {
    console.log(this.eventId);
    this.router.navigate([`update-event/${this.eventId}`]);
  }

  deleteEvent(): void {
    console.log(this.eventId);
    this.organizerService.cancelEvent(this.eventId).subscribe({
      next: (res) => {
        console.log('Event deleted successfully.', res);
        this.router.navigate(['organizer-dashboard']);
      },
      error: (error) => {
        console.error('Error deleting event:', error);
      }
    });
  }

}
