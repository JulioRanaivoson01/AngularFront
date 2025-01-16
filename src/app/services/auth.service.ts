import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Utilisez la configuration du fichier d'environnement

  constructor(private http: HttpClient) {}

  /**
   * Enregistre un nouvel utilisateur.
   * @param user Les informations de l'utilisateur.
   * @returns Un Observable contenant la réponse du backend.
   */
  registerUser(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user); // Concaténation avec la route spécifique
  }
}
