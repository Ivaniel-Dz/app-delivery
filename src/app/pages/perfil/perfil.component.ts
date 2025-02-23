import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../interfaces/perfil';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  //Infectamos los servicios a este componente
  headerService = inject(HeaderService);
  perfilService = inject(PerfilService);

  //Cada vez que cargue:
  ngOnInit(): void {
    // cambia el valor de titulo definido
    this.headerService.titulo.set('Perfil');
    // Muestra si los datos del perfil existen
    if(this.perfilService.perfil){
      this.perfil = {...this.perfilService.perfil()!}
    }
  }

  perfil:Perfil = {
    nombre: "",
    direccion: "",
    telefono: "",
    detalleEntrega: ""
  }

  guardarDatosPerfil(){
    this.perfilService.guardarDatos(this.perfil);
  }

}
