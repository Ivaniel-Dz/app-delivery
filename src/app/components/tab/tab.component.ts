import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab',
  imports: [CommonModule, RouterModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  constructor(public router: Router) {}

  //Variables
  colorDesactivado: string = '#555555';
  colorActivado: string = '#000000';
}
