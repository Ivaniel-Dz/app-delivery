import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/categorias';
import { CardCategoriaComponent } from '../../components/card-categoria/card-categoria.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardCategoriaComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

//métodos de ciclo de vida: OnInit, OnDestroy
export class HomeComponent implements OnInit, OnDestroy {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  
  //signal solo actualiza la categorias y no todo la pagina
  categorias:WritableSignal<Categoria[]> = signal([]);

  //Cada vez que carga el valor
  ngOnInit(): void {
    //carga el titulo
    this.headerService.titulo.set('Home');
    this.headerService.extendido.set(true);
    //carga los datos de BBDD
    this.categoriasService.getAll().then(res => this.categorias.set(res));
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }
}
