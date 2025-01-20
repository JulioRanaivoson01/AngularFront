import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';  // Importation de FormsModule
import { AuthService } from '../../services/auth.service';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,  // Spécifie que ce composant est autonome
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule]  // Ajoutez FormsModule ici
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(
    private authService: AuthService,
    private router: Router){

    }

  login(){
    this.authService.loginUser(
      this.loginForm.get("email")?.value!,
      this.loginForm.get("password")?.value!
    ).pipe(
      take(1),
      catchError(_=>{
        return EMPTY
      }),
      tap(value=>{
        this.router.navigate(["/dashboard"])
      })
    ).subscribe()


  }
}
