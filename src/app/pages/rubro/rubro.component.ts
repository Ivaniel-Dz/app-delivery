import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-rubro',
  imports: [],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.scss'
})
export class RubroComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Rubro');
  }
}
