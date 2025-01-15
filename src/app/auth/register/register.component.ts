import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { catchError, EMPTY, take, takeUntil, tap } from 'rxjs';

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
  constructor(private router: Router, private authService: AuthService) {}

  // Méthode pour enregistrer l'utilisateur
  registerUser() {
    const user = this.form.value;

    this.authService.registerUser({
      username: user.username!,
      email: user.password!,
      password: user.password!
    }).pipe(
      take(1),
      catchError(_=>{
        console.log("An error occured");

        return EMPTY
      }),
      tap(_=>{
        this.router.navigate(["/login"])
      })
    ).subscribe()
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
