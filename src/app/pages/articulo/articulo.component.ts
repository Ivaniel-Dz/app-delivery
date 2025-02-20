import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Articulo');
  }
}
