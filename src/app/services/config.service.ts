import { Injectable, signal, WritableSignal } from '@angular/core';
import { Config } from '../interfaces/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  
  constructor() {
    fetch('data/configuracion.json').then((res) => {
      res.json().then((resJson) => {
        console.log(resJson);
        this.configuracion.set(resJson);
      });
    });
  }

  configuracion: WritableSignal<Config> = signal({
    costoEnvio: 0,
    diasVencimientoCarrito: 100,
  });

}
