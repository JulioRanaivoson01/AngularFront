import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importation de FormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Spécifie que ce composant est autonome
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]  // Ajoutez FormsModule ici
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Form submitted', { email: this.email, password: this.password });
      // Vous pouvez ajouter la logique pour envoyer les données à votre backend ici
    } else {
      console.log('Les champs sont invalides');
    }
  }
}
