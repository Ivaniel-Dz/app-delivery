import { Component, ElementRef, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from '../../components/contador-cantidad/contador-cantidad.component';
import { Producto } from '../../interfaces/productos';
import { ProductosService } from '../../services/productos.service';
import { Router, RouterModule } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { ConfigService } from '../../services/config.service';
import { NUMERO_WHATSAPP } from '../../constants/telefono';

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
  perfilService = inject(PerfilService);
  configService = inject(ConfigService);
  router = inject(Router);

  //variable para guardar los productos del carrito
  //signal solo actualiza los productos y no todo la pagina
  productosCarrito: WritableSignal<Producto[]> = signal([]);

  subtotal: number = 0;
  total: number = 0;

  //DOM
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  //Cada vez que cargue
  ngOnInit(): void {
    //Cambia el titulo
    this.headerService.titulo.set('Carrito');
    //
    this.buscarInformacionProductos().then(() => {
      this.calcularInformacion();
    });
  }

  async buscarInformacionProductos() {
    for (let i = 0; i < this.cartService.carrito.length; i++) {
      const itemCarrito = this.cartService.carrito[i];
      const res = await this.productosService.getById(itemCarrito.idProducto);
      if (res) this.productosCarrito.set([...this.productosCarrito(), res]);
    }
  }

  eliminarProducto(idProducto: number) {
    this.cartService.eliminarProducto(idProducto);
  }

  calcularInformacion() {
    this.subtotal = 0;
    for (let i = 0; i < this.cartService.carrito.length; i++) {
      this.subtotal +=
        this.productosCarrito()[i].precio *
        this.cartService.carrito[i].cantidad;
    }
    this.total = this.subtotal + this.configService.configuracion().costoEnvio;
  }

  //Actualiza el total de precio al agregar mas producto
  cambiarCantidadProducto(id: number, cantidad: number) {
    this.cartService.cambiarCantidadProducto(id, cantidad);
    this.calcularInformacion();
  }

  // Metodos para conectar con WhatsApp
  async enviarMensaje() {
    let pedido = '';
    for (let i = 0; i < this.cartService.carrito.length; i++) {
      const producto = await this.productosService.getById(
        this.cartService.carrito[i].idProducto
      );
      pedido += `* ${this.cartService.carrito[i].cantidad} X ${producto?.nombre}
`;
    }
    const mensaje = `
      Hola! Soy ${
        this.perfilService.perfil()?.nombre
      }, y te quiero hacer el siguiente pedido:
      ${pedido}
      Si te querés comunicar conmigo hacelo al Nº del que te hablo o al ${
        this.perfilService.perfil()?.telefono
      }.
      La dirección de envío es: ${this.perfilService.perfil()?.direccion} - ${
      this.perfilService.perfil()?.detalleEntrega
    }.
      Muchas gracias
      `;

    const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURI(mensaje)}`;
    window.open(link, '_blank');
    this.dialog.nativeElement.showModal();
  }

  finalizarPedido() {
    this.cartService.vaciar();
    this.dialog.nativeElement.close();
    this.router.navigate(['/']);
  }

  editarPedido() {
    this.dialog.nativeElement.close();
  }
}