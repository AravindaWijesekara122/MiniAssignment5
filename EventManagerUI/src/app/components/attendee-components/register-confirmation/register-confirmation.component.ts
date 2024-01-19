import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendeeService } from 'src/app/services/attendee.service';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent {
  registrationResponse: any;

  constructor(
    private attendeeService: AttendeeService,
    private router: Router
  ){}

  ngOnInit(){
    this.registrationResponse = this.attendeeService.getRegistrationResponse();
    console.log("Confirmation Message", this.registrationResponse)
  }

  back(){
    this.router.navigate(['attendee-dashboard/registered-events']);
  }
}
