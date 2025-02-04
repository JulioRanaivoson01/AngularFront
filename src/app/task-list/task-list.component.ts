import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';  // Assurez-vous d'importer votre service

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];  // Déclaration de la propriété tasks comme tableau vide

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();  // Charge les tâches au démarrage du composant
  }

  loadTasks() {
    const projectId = 'someProjectId';  // Remplacez par l'ID du projet
    this.taskService.getTasksByProject(projectId).subscribe(
      (tasks) => {
        this.tasks = tasks;  // Assurez-vous d'assigner les tâches récupérées à la propriété tasks
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches', error);
      }
    );
  }
}
