import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Carrito');
  }
}
