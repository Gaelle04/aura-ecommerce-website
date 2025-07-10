import { Component } from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import {Observable} from 'rxjs';


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
  
  constructor(private authService: AuthService){
   this.isLoggedIn$= this.authService.isLoggedIn$;
  }

  

  logout() {
    this.authService.logout(); 
  }
  
}
