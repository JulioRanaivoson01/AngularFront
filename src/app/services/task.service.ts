import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = environment.apiUrl; //Ito ny base url (ao @ environment misy azy)
  //mb regleo kely le bouton ajout task
  //de mb omeo proposition anle fonctionaliter rh misy conseille kely
  constructor(private http: HttpClient) {}


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }


  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/create-task`, task); //De mila lay tena url ny create task no ataon'lah ohatra oe: http://locahost:9090/api/task/create-task de ny http://localhost:9090/api efa io base url de lay /task/create-task sisa no atao
  }


  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/task/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/task/${id}`);
  }
}
