import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { ICartItem } from '../../shared/models/cart-item.model';
import { AppState } from '../../app.state';
import {Observable} from 'rxjs';
import { selectCartItems } from './cart.selectors';
import {CommonModule} from '@angular/common';
import { ProductCard } from '../product-list/components/product-card/product-card';
import { removeFromCart, updateCartItemQuantity } from './cart.actions';
import { TotalPricePipe } from '@app/shared/pipes/total-price-pipe';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ProductCard, TotalPricePipe],
  standalone:true,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})



export class Cart {

  cartItems$: Observable<ICartItem[]>;

  removeItem(productId: number){
    this.store.dispatch(removeFromCart({productId}));
    
  }

  incrementQuantity(item: ICartItem){
    this.store.dispatch(updateCartItemQuantity({productId: item.product.id, quantity:item.quantity+1}))
  }

  decrementQuantity(item:ICartItem){
    if(item.quantity>1){
      this.store.dispatch(updateCartItemQuantity({productId: item.product.id, quantity: item.quantity -1}))
    }
  }

    constructor(private store: Store<AppState>){
      this.cartItems$ = this.store.select(selectCartItems);
      
}

}
