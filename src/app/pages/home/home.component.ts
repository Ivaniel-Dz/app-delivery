import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

//métodos de ciclo de vida: OnInit, OnDestroy
export class HomeComponent implements OnInit, OnDestroy {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //Cada que carga que cambie el valor de titulo
  ngOnInit(): void {
    this.headerService.titulo.set('Home');
    this.headerService.extendido.set(true);
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }

}
