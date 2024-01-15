import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-organizer-login',
  templateUrl: './organizer-login.component.html',
  styleUrls: ['./organizer-login.component.css']
})
export class OrganizerLoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.organizerLogin(this.email, this.password).subscribe(
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
