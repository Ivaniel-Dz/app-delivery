import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Producto } from '../../interfaces/productos';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-rubro',
  imports: [CommonModule, RouterModule,  CardProductoComponent],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.scss',
})
export class RubroComponent {
  //Infectamos los servicio a este componente
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  categoriasService = inject(CategoriasService);
  ac = inject(ActivatedRoute);
  //variables
  productos: Producto[] = [];

  //Cada vez que carga la pagina
  ngOnInit(): void {
    //cambie el valor de titulo
    this.headerService.titulo.set('Rubro');

    this.ac.params.subscribe((params) => {
      if (params['id']) {
        this.categoriasService.getById(parseInt(params['id']))
          .then(categoria => {
            if(categoria){
              //Obtiene los productos x categoría
              this.productos = categoria.productos;
              //Obtiene el titulo de la categoría
              this.headerService.titulo.set(categoria.nombre);
            }
          })
      }
    });
  }
}
