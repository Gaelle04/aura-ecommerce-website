import { Component } from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { selectCartItemCount } from '../../../pages/cart/cart.selectors';
import { AppState } from '../../../app.state';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {



  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isLoggedIn$: Observable<boolean>;
  
  constructor(private authService: AuthService, private store: Store<AppState>){
   this.isLoggedIn$= this.authService.isLoggedIn$;
   this.cartCount$ = this.store.select(selectCartItemCount);
  }

  cartCount$:Observable<number>;

  logout() {
    this.authService.logout(); 
  }
  
}
