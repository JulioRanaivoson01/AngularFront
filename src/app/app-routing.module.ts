import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';  
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirection vers la page de login par défaut
  { path: 'login', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TaskListComponent }  // Route pour la liste des tâches
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
