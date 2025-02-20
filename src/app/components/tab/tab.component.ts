import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {

  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log("Evento: ",event)
        switch (event.urlAfterRedirects) {
          case '':
             this.seleccionado = [true, false, false, false];
             break;
          case '/buscar':
             this.seleccionado = [false, true, false, false];
             break;
          case '/carrito':
             this.seleccionado = [false, false, true, false];
             break;
          case '/perfil':
             this.seleccionado = [false, false, false, true];
             break;
          default:
            this.seleccionado = [true, false, false, false];
            break;
        }
      }
    })
  }

  //Variables
  seleccionado = [false, false, false, false];
  colorDesactivado:string = '#555555';
  colorActive:string = '#000000';

  navegar(direccion:string){
    this.router.navigate([direccion])
    console.log(direccion)
  }

}
