// update-event.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  eventId = 0;
  eventData: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizerService: OrganizerService
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.organizerService.getEventById(this.eventId).subscribe({
      next: (event) => {
        console.log('Updated Event', event);
        this.eventData = event;
      },
      error: (error) => {
        console.error('Error fetching event data:', error);
      }
    });
  }

  updateEvent(): void {
    this.organizerService.updateEvent(this.eventId, this.eventData).subscribe({
      next: (res) => {
        console.log('Event updated successfully.', res);
        this.router.navigate(['event-details', this.eventId]);
      },
      error: (error) => {
        console.error('Error updating event:', error);
      }
    });
  }
}

