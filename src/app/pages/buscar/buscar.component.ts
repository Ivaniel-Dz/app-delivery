import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Busqueda } from '../../interfaces/busqueda';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar',
  imports: [CommonModule, FormsModule, RouterModule ,CardProductoComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  //Inyectamos los servicios a este componente
  headerService = inject(HeaderService);
  productosService = inject(ProductosService)
  productos:Producto[] = []

  //Cada que cargue:
  ngOnInit(): void {
    // cambia el valor de titulo asignado
    this.headerService.titulo.set('Buscar');
    // agrega todo los productos en búsqueda sin filtrar
    this.productosService.getAll().then(res => this.productos = res)
  }

  parametrosBusqueda:Busqueda = {
    texto: "",
    aptoCeliaco: false,
    aptoVegano: false
  }

  async buscar(){
    this.productos =  await this.productosService.buscar(this.parametrosBusqueda);
  }

}
