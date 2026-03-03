import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {CarbonFootprint} from './carbon-footprint/carbon-footprint';
import {Footer} from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CarbonFootprint, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calcul-empreinte-carbone');
}
