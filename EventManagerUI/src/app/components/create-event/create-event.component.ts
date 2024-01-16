import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private organizerService: OrganizerService,
    private router: Router
  ) { }

  //organizerID = this.organizerService.organizerID;
  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      organizerID: this.authService.getOrganizerId()
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      console.log(eventData);

      this.organizerService.createEvent(eventData).subscribe({
        next: (createdEvent) => {
          console.log('Event created successfully:', createdEvent);
          //console.log()
          this.eventForm.reset;
          this.router.navigate(['organizer-dashboard']);
        },
        error: (error) => {
          console.error('Error creating event:', error);
        }
      });
    }
  }
}
