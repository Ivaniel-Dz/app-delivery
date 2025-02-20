import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Buscar');
  }
}
