import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../services/task.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Pour mocker les appels HTTP

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Nous utilisons HttpClientTestingModule pour les tests
      declarations: [ TaskListComponent ],
      providers: [TaskService] // Nous fournissons le service TaskService
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on init', () => {
    component.loadTasks();
    expect(component.tasks.length).toBeGreaterThan(0); // Vérifie si des tâches sont chargées
  });
});
