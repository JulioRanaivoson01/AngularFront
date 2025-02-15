import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.loginUser(email, password).subscribe(
        response => {
          // Si la connexion réussit, rediriger vers le tableau de bord
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Afficher un message d'erreur si la connexion échoue
          console.error('Erreur de connexion :', error);
        }
      );
    }
  }
}
