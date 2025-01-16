import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';  // Assure-toi d'importer l'interface

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:9090/api/user/register';  // URL de ton backend

  constructor(private http: HttpClient) {}

  // Récupérer toutes les tâches
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }

  // Créer une nouvelle tâche
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }

  // Mettre à jour une tâche
  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, task);
  }

  // Supprimer une tâche
  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
