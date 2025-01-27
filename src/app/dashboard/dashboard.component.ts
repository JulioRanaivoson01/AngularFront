import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Projet A',
      description: 'Description du projet A',
      tasks: [
        { id: 1, title: 'Tâche 1', description: 'Description de la tâche 1', status: 'À faire' },
        { id: 2, title: 'Tâche 2', description: 'Description de la tâche 2', status: 'En cours' },
      ],
    },
    {
      id: 2,
      name: 'Projet B',
      description: 'Description du projet B',
      tasks: [
        { id: 3, title: 'Tâche 1', description: 'Description de la tâche 1', status: 'Terminé' },
      ],
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderDashboard();
    const addProjectBtn = document.querySelector('#addProjectBtn');
    addProjectBtn?.addEventListener('click', this.addProject.bind(this));
  }

  renderDashboard(): void {
    const container = this.elementRef.nativeElement.querySelector('#dashboard-container');
    container.innerHTML = '';

    this.projects.forEach((project) => {
      const projectColumn = document.createElement('div');
      projectColumn.className = 'project-column';

      projectColumn.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div id="tasks-${project.id}" class="tasks"></div>
        <div class="add-task">
          <input type="text" placeholder="Titre de la tâche" id="taskTitle-${project.id}">
          <input type="text" placeholder="Description de la tâche" id="taskDesc-${project.id}">
          <button id="addTaskBtn-${project.id}">Ajouter Tâche</button>
        </div>
      `;

      const tasksContainer = projectColumn.querySelector(`#tasks-${project.id}`);
      project.tasks.forEach((task) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
          <h4>${task.title}</h4>
          <p>${task.description}</p>
          <p>Status: ${task.status}</p>
          <button id="changeStatus-${task.id}">Changer Statut</button>
          <button id="deleteTask-${task.id}">Supprimer</button>
        `;
        tasksContainer?.appendChild(taskElement);

        const changeStatusBtn = taskElement.querySelector(`#changeStatus-${task.id}`);
        const deleteTaskBtn = taskElement.querySelector(`#deleteTask-${task.id}`);
        changeStatusBtn?.addEventListener('click', () => this.changeTaskStatus(task.id, project.id));
        deleteTaskBtn?.addEventListener('click', () => this.deleteTask(task.id, project.id));
      });

      container.appendChild(projectColumn);

      const addTaskBtn = projectColumn.querySelector(`#addTaskBtn-${project.id}`);
      addTaskBtn?.addEventListener('click', () => this.addTask(project.id));
    });
  }

  addTask(projectId: number): void {
    const titleInput = document.querySelector(`#taskTitle-${projectId}`) as HTMLInputElement;
    const descInput = document.querySelector(`#taskDesc-${projectId}`) as HTMLInputElement;

    if (titleInput && descInput) {
      const newTask = {
        id: this.generateId(),
        title: titleInput.value,
        description: descInput.value,
        status: 'À faire',
      };

      const project = this.projects.find((p) => p.id === projectId);
      if (project) {
        project.tasks.push(newTask);
        this.renderDashboard();
      }
    }
  }

  deleteTask(taskId: number, projectId: number): void {
    const project = this.projects.find((p) => p.id === projectId);
    if (project) {
      project.tasks = project.tasks.filter((t) => t.id !== taskId);
      this.renderDashboard();
    }
  }

  changeTaskStatus(taskId: number, projectId: number): void {
    const project = this.projects.find((p) => p.id === projectId);
    if (project) {
      const task = project.tasks.find((t) => t.id === taskId);
      if (task) {
        const statuses = ['À faire', 'En cours', 'Terminé'];
        const currentIndex = statuses.indexOf(task.status);
        task.status = statuses[(currentIndex + 1) % statuses.length];
        this.renderDashboard();
      }
    }
  }

  addProject(): void {
    const nameInput = document.querySelector('#projectName') as HTMLInputElement;
    const descInput = document.querySelector('#projectDesc') as HTMLInputElement;

    if (nameInput && descInput) {
      const newProject = {
        id: this.generateId(),
        name: nameInput.value,
        description: descInput.value,
        tasks: [],
      };

      this.projects.push(newProject);
      this.renderDashboard();
    }
  }

  private generateId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
