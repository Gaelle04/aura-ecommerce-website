import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons } from '../../../../shared/components/buttons/buttons';
import { CartService } from '../../../../shared/services/cart.service';
import { ICartItem } from '../../../../shared/models/cart-item.model';
import { IProduct } from '../../../../shared/models/product.model';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, Buttons, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  @Input() product: any; 
  @Input() showAddToCart: boolean= true;
  // @Output() add = new EventEmitter(); 

  constructor(private cartservice: CartService){}

  handleAddToCart(product :IProduct) {
    // this.add.emit(this.product);
    // call cart service add to cart method
    const item: ICartItem={
      product, 
      quantity:1,
    }
    this.cartservice.addItem(item);
  }
}

