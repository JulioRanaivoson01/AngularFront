import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  // Définition du formulaire
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // Injection des services nécessaires
  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour enregistrer l'utilisateur
  registerUser() {
    const user = this.form.value;

    this.http.post('http://localhost:8080/api/register', user)
      .subscribe({
        next: (response) => {
          console.log('Utilisateur enregistré avec succès:', response);
          // Redirection vers la page de connexion
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        }
      });
  }

  // Getters pour vérifier les erreurs de validation
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
