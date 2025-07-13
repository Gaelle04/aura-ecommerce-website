import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Navbar } from './core/layout/navbar/navbar';
import { Footer } from './core/layout/footer/footer';
import {NgIf} from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavigationEnd} from '@angular/router';
import { ProductList } from './pages/product-list/product-list';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NgIf, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AURA';
  hideLayout = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.url;
        this.hideLayout = url.includes('login') || url.includes('signup') || url.includes('not-found');
      });
  }
}
