import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';  // Chemin corrigé
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module'; // Assurez-vous du bon chemin
import { TaskListComponent } from '../task-list/task-list.component';
import { RegisterComponent } from '../auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  // Utilisez AppRoutingModule pour la gestion des routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
