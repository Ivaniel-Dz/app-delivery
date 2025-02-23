import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeaderService } from '../../services/header.service';

import { FormsModule } from '@angular/forms';
import { Busqueda } from '../../interfaces/busqueda';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule, RouterModule, CardProductoComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  //Inyectamos los servicios a este componente
  headerService = inject(HeaderService);
  productosService = inject(ProductosService)
  productos: WritableSignal<Producto[]> = signal([]);
  cargando = signal(true);

  //Cada que cargue:
  ngOnInit(): void {
    // cambia el valor de titulo asignado
    this.headerService.titulo.set('Buscar');
    // agrega todo los productos en búsqueda sin filtrar
    this.productosService.getAll().then(res => this.productos.set(res));
    this.cargando.set(false);
  }

  parametrosBusqueda:Busqueda = {
    texto: "",
    aptoCeliaco: false,
    aptoVegano: false
  }

  async buscar(){
    this.cargando.set(true);
    this.productos.set(await this.productosService.buscar(this.parametrosBusqueda));
    this.cargando.set(false);
  }

}
