import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/tasks';  // URL de ton backend

  constructor(private http: HttpClient) {}

  // Récupérer toutes les tâches
  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Créer une nouvelle tâche
  createTask(task: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  // Mettre à jour une tâche
  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, task);
  }

  // Supprimer une tâche
  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
