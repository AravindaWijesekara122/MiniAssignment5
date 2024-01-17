import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-attendee-login',
  templateUrl: './attendee-login.component.html',
  styleUrls: ['./attendee-login.component.css']
})
export class AttendeeLoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  onSubmit(): void {
    this.authService.attendeeLogin(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.setAttendeeId(response.id);
        this.router.navigate(['attendee-dashboard']);
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }
}
