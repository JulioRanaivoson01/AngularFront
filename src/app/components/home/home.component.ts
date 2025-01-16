import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = [
    {
      name: 'Projet 1',
      tasks: [
        { name: 'Tâche 1', status: 'À faire' },
        { name: 'Tâche 2', status: 'En cours' },
        { name: 'Tâche 3', status: 'Terminé' }
      ]
    },
    {
      name: 'Projet 2',
      tasks: [
        { name: 'Tâche 1', status: 'À faire' },
        { name: 'Tâche 2', status: 'En cours' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createNewProject() {
    // Fonction pour créer un projet
  }

  addTask(project: any, status: string) {
    // Fonction pour ajouter une tâche
  }

  editTask(task: any) {
    // Fonction pour éditer une tâche
  }

  deleteTask(task: any) {
    // Fonction pour supprimer une tâche
  }
}
