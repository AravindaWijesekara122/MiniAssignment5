import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-organizer-login',
  templateUrl: './organizer-login.component.html',
  styleUrls: ['./organizer-login.component.css']
})
export class OrganizerLoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.organizerLogin(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.setOrganizerId(response.id)
        console.log('Login successful', response.organizerID);
        this.router.navigate(['organizer-dashboard'])
      },
      error: (error) => {
        console.error('Login error', error);
      }

    });
  }
}
