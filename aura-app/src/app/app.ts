import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Navbar } from './core/layout/navbar/navbar';
import { Footer } from './core/layout/footer/footer';
import {NgIf, NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AURA';

  constructor(private router: Router){}

  get hideLayout(): boolean{
    return this.router.url == '/login';
  }
}
