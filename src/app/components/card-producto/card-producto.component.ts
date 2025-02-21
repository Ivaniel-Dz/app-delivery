import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/productos';

@Component({
  selector: 'app-card-producto',
  imports: [CommonModule],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.scss'
})
export class CardProductoComponent {
  //Comunicación entre padre e hijo
  //card: hijo, rubro: padre
  @Input({required:true}) producto!:Producto;
}
