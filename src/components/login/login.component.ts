import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = ''
  email = '';
  password = '';

  constructor (private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {

        alert("Sikeres bejelentkezés!")
        this.router.navigate(['main']); 
      },
      error: (error) => {
        console.error('Bejelentkezési hiba:', error);
      }
    });
  }

  onSignUp() {
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (response) => {
        alert("Sikeres regisztráció!")
        this.router.navigate(['login'])
      }
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']); 
  }
}
