import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:9090/api/user/register';

  constructor(private http: HttpClient) {}


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }


  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }


  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
