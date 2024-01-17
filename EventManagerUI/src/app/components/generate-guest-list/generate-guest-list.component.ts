import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-generate-guest-list',
  templateUrl: './generate-guest-list.component.html',
  styleUrls: ['./generate-guest-list.component.css']
})
export class GenerateGuestListComponent {
  eventId = 0;
  attendees: any[] = [];

  constructor(private route: ActivatedRoute, private organizerService: OrganizerService) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.loadguestList(this.eventId);
  }


  loadguestList(eventId: number): void {
    this.organizerService.generateGuestList(eventId).subscribe({
      next: (attendees) =>{
        console.log(attendees);
        this.attendees = attendees;
      },
      error: (error) => {
        console.error('Error loading guest list', error);
      }
    });
  }
}
