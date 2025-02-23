import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from '../../components/contador-cantidad/contador-cantidad.component';
import { Producto } from '../../interfaces/productos';
import { ProductosService } from '../../services/productos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, ContadorCantidadComponent, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss',
})
export class CarritoComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);
  cartService = inject(CartService);
  productosService = inject(ProductosService);

  //variable para guardar los productos del carrito
  productosCarrito: Producto[] = [];

  subtotal: number = 0;
  delivery: number = 100;
  total: number = 0;

  //Cada vez que cargue
  ngOnInit(): void {
    //Cambia el titulo
    this.headerService.titulo.set('Carrito');
    //
    this.cartService.carrito.forEach(async (itemCarrito) => {
      const res = await this.productosService.getById(itemCarrito.idProducto);
      if (res) this.productosCarrito.push(res);
      this.calcularInformacion();
    });
  }

  eliminarProducto(idProducto: number) {
    this.cartService.eliminarProducto(idProducto);
  }

  calcularInformacion() {
    this.subtotal = 0;
    for (let i = 0; i < this.cartService.carrito.length; i++) {
      this.subtotal +=
        this.productosCarrito[i].precio * this.cartService.carrito[i].cantidad;
    }

    this.total = this.subtotal + this.delivery;
  }

  //Actualiza el total de precio al agregar mas producto
  cambiarCantidadProducto(id:number, cantidad:number){
    this.cartService.cambiarCantidadProducto(id, cantidad)
    this.calcularInformacion();
  }
}
