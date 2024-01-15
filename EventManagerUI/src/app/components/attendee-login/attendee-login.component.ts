import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-attendee-login',
  templateUrl: './attendee-login.component.html',
  styleUrls: ['./attendee-login.component.css']
})
export class AttendeeLoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.attendeeLogin(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }
}
