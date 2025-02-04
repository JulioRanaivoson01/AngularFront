import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Import des routes depuis ton fichier app.routes.ts
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Active la détection des changements
    provideRouter(routes),  // Fournit les routes pour la navigation
    provideHttpClient(withFetch())  // Active la gestion des requêtes HTTP avec fetch
  ]
};
