import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/auth.model'
import { catchError, EMPTY, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  apiError = false;  // Pour gérer l'affichage des erreurs de l'API

  constructor(private router: Router, private authService: AuthService) {}

  registerUser() {
    const user = this.form.value;

    this.authService.registerUser({
      username: user.username!,
      email: user.email!,
      password: user.password!
    }).pipe(
      take(1),
      catchError(error => {
        console.error("API Error:", error);
        this.apiError = true;  // Afficher l'erreur
        return EMPTY;
      }),
      tap(_ => {
        this.router.navigateByUrl("/login");  // Rediriger vers la page de connexion
      })
    ).subscribe();
  }

  get usernameInvalid() {
    return this.form.get('username')?.invalid && this.form.get('username')?.touched;
  }

  get emailInvalid() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get passwordInvalid() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }
}
