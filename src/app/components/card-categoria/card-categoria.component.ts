import { Component, Input } from '@angular/core';
import { Categoria } from '../../interfaces/categorias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-categoria',
  imports: [CommonModule],
  templateUrl: './card-categoria.component.html',
  styleUrl: './card-categoria.component.scss'
})
export class CardCategoriaComponent {

  //Comunicacion entre padre e hijo
  //card: hijo, home: padre
  @Input({required:true}) categoria!:Categoria;
}
