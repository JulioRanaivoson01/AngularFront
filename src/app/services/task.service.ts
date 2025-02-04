import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:9090/api/tasks';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  createTask(projectId: string, task: any): Observable<any> {
    const url = `${this.apiUrl}/project/${projectId}`;
    return this.http.post<any>(url, task, { headers: this.getHeaders() });
  }

  getTasksByProject(projectId: string): Observable<any[]> {
    const url = `${this.apiUrl}/project/${projectId}`;
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  getTaskById(taskId: string): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  updateTask(taskId: string, task: any): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.patch<any>(url, task, { headers: this.getHeaders() });
  }

  deleteTask(taskId: string): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<any>(url, { headers: this.getHeaders() });
  }
}
