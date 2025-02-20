import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configuración principal de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // Optimiza la detección de cambios en la zona de Angular para mejorar el rendimiento
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Proporciona la configuración de rutas definida en app.routes.ts
    provideRouter(routes),
  ],
};
