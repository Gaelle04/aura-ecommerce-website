import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CartState } from './cart.states';

export const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
    ( cart: CartState) => cart.items
);

export const selectCartItemCount = createSelector(
  selectCart,
    (  cart: { items: any[]; }) => cart.items.reduce((sum: any, item: { quantity: any; }) => sum + item.quantity, 0)
);




