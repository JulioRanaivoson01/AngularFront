import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  task = {
    title: '',
    description: '',
    status: '',
    startDate: '',
    endDate: ''
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {}

  onTitleChange(event: any): void {
    this.task.title = event.target.value;
  }

  onDescriptionChange(event: any): void {
    this.task.description = event.target.value;
  }

  onStatusChange(event: any): void {
    this.task.status = event.target.value;
  }

  onEndDateChange(event: any): void {
    this.task.endDate = event.target.value;
  }

  addTask(): void {
    this.taskService.createTask('projectId', this.task).subscribe(
      (response: any) => {
        console.log('Task added successfully!', response);
      },
      (error: any) => {
        console.error('Error adding task', error);
      }
    );
  }
}
