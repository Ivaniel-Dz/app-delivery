import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  imports: [],
  templateUrl: './contador-cantidad.component.html',
  styleUrl: './contador-cantidad.component.scss',
})
export class ContadorCantidadComponent implements OnInit {
  numero = signal(1);
  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial = 1;

  ngOnInit(): void {
    this.numero.set(this.cantidadInicial);
  }

  actualizarNumero(diferencia: number) {
    this.numero.set(Math.max(this.numero() + diferencia, 1));
    this.cantidadCambiada.emit(this.numero());
  }
}
