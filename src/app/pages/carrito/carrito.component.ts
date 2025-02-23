import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from '../../components/contador-cantidad/contador-cantidad.component';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,ContadorCantidadComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);
  cartService = inject(CartService)

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Carrito');
  }

  eliminarProducto(idProducto:number){
    this.cartService.eliminarProducto(idProducto)
  }

}
