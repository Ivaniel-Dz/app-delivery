import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { iif } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //Infectamos el servicio de header a este componente
  headerService = inject(HeaderService);

  //signal
  claseAplicada = signal('');
  tituloMostrado = signal('');

  //Efecto
  esconderTitulo = effect(
    () => {
      if (this.headerService.titulo()) {
        this.claseAplicada.set('fade-out');
      }
    },
    { allowSignalWrites: true }
  );

  mostrarTituloNuevo(e: AnimationEvent) {
    if (e.animationName.includes('fade-out')) {
      this.tituloMostrado.set(this.headerService.titulo());
      this.claseAplicada.set('fade-in');
      setTimeout(() => this.claseAplicada.set(''), 250);
    }
  }
}
