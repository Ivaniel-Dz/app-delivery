import { Routes } from '@angular/router';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RubroComponent } from './pages/rubro/rubro.component';

// Configuración de rutas de la aplicación
export const routes: Routes = [
  {
    path: '', // Ruta principal de la aplicación
    component: HomeComponent, // Componente que se carga en la ruta principal
    title: 'Home', // Título de la pestaña cuando se accede a esta ruta
  },
  {
    path: 'articulo/:id',
    component: ArticuloComponent,
    title: 'Articulo',
  },
  {
    path: 'buscar',
    component: BuscarComponent,
    title: 'Buscar',
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    title: 'Carrito',
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    title: 'Perfil',
  },
  {
    path: 'categoria/:id',
    component: RubroComponent,
    title: 'Rubro',
  },
];
