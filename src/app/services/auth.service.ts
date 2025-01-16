import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../models/auth.model'; // Assurez-vous que votre interface User est correcte

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  /**
   * Enregistre un nouvel utilisateur.
   * @param user Les informations de l'utilisateur.
   * @returns Un Observable contenant la réponse du backend.
   */
  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, user); 
  }
 
  /**
   * Connecte un utilisateur existant.
   * @param email L'email de l'utilisateur.
   * @param password Le mot de passe de l'utilisateur.
   * @returns Un Observable contenant la réponse du backend.
   */
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, { email, password });
  }
}
