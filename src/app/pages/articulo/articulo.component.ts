import { Component, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from '../../components/contador-cantidad/contador-cantidad.component';

@Component({
  selector: 'app-articulo',
  imports: [CommonModule, ContadorCantidadComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  // variable para guardar los productos
  producto?:Producto;
  cantidad = signal(1);
  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Articulo');
  }

  //obtiene el producto por el id
  constructor( private ac:ActivatedRoute ){
    ac.params.subscribe(param => {
      if(param['id']){
        this.productosService.getById(param['id']).then(producto => {
          this.producto = producto;
          this.headerService.titulo.set(producto!.nombre);
        })
      }
    })
  }

}
