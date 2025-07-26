import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-favorites',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class Favorites {

}
