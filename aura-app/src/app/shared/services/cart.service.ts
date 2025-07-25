import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ICartItem } from '../models/cart-item.model';
import {Store} from '@ngrx/store';
import { AppState } from '../../app.state';
import {  selectCartItems } from '../../pages/cart/cart.selectors';
import { addToCart, clearCart, removeFromCart } from '../../pages/cart/cart.actions';



@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems$: Observable<ICartItem[]>;

  constructor(private store:Store<AppState>) { 
    this.cartItems$ = this.store.select(selectCartItems);
  }

  addItem(item:ICartItem){
    this.store.dispatch(addToCart({item}));
  }

  removeItem(productId:number){
    this.store.dispatch(removeFromCart({productId}));
  }

  clearCart(){
    this.store.dispatch(clearCart());
  }
}
