import { Component , inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import { FavoritesService } from '@app/shared/services/favoritesService/favorites.service';
import { ProductCard } from '../product-list/components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, ProductCard, CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class Favorites {
  readonly favoriteItems = inject(FavoritesService).favoriteItems;

}
