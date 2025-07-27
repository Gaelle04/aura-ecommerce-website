import { Component, Input,  inject, Signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons } from '../../../../shared/components/buttons/buttons';
import { CartService } from '../../../../shared/services/cartService/cart.service';
import { ICartItem } from '../../../../shared/models/cart-item.model';
import { IProduct } from '@app/shared/models/IProduct.model';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import { FavoritesService } from '@app/shared/services/favoritesService/favorites.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, Buttons, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard implements OnInit{
  @Input() product!: any; 
  @Input() showAddToCart: boolean= true;
  isFavorite!: Signal<boolean>;

  private favService = inject(FavoritesService);

  ngOnInit() {
    this.isFavorite = this.favService.isFavorite(this.product.id);
  }
  

  constructor(private cartservice: CartService){}

  

  handleAddToCart(product :IProduct) {
    const item: ICartItem={
      product, 
      quantity:1,
    }
    this.cartservice.addItem(item);
  }

  toggleFavorite(){
    this.favService.toggle(this.product);
  }

  

}

