import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, Header, Footer, Home, Main]
})
export class App {
  protected readonly title = signal('newAng5');
}
