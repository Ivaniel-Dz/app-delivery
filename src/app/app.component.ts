import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TabComponent } from "./components/tab/tab.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, TabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-delivery';
}
