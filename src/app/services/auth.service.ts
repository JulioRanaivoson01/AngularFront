import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(user: User){
    return this.http.post(environment.apiUrl + "/api/register", user)
  }
}
