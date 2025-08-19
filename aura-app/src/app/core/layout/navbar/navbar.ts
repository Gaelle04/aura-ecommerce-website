import { Component, signal } from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Router} from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { selectCartItemCount } from '../../../pages/cart/cart.selectors';
import { AppState } from '../../../app.state';
import { IProduct } from '@app/shared/models/IProduct.model';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, RouterModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {



  isMenuOpen = false;
  products: IProduct[]=[];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isLoggedIn$: Observable<boolean>;
  
  constructor(private authService: AuthService, private store: Store<AppState>, private router: Router){
   this.isLoggedIn$= this.authService.isLoggedIn$;
   this.cartCount$ = this.store.select(selectCartItemCount);
  }

  cartCount$:Observable<number>;

  logout() {
    this.authService.logout();
    localStorage.removeItem('cart'); 
  }

  query= '';

  searchByKeyword() {
    const q = this.query?.trim();
    this.router.navigate(['/products'], { queryParams: q ? { q } : {} });
  }

   isAdminUser(): boolean{
    return this.authService.isAdmin();
  }
  
}
