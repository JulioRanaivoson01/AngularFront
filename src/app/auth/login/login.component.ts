import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Ajouter une validation d'email
    password: new FormControl('', [Validators.required]),
  });

  errorMessage: string = '';  // Variable pour stocker le message d'erreur

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.loginUser(
      this.loginForm.get('email')?.value!,
      this.loginForm.get('password')?.value!
    ).pipe(
      take(1),
      catchError((error) => {
        // Gérer l'erreur et afficher un message
        this.errorMessage = 'Échec de la connexion. Vérifiez vos identifiants ou votre connexion réseau.';
        console.error('Login error:', error);  // Pour un meilleur débogage
        return EMPTY;  // Permet de continuer sans interrompre l'application
      }),
      tap((value) => {
        this.router.navigate(['/dashboard']);
      })
    ).subscribe();
  }
}
