import {createAction, props} from '@ngrx/store';
import { ICartItem } from '../../shared/models/cart-item.model';


export const addToCart = createAction(
    '[Cart] Add Item', 
    props<{item:ICartItem }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove Item',
    props <{productId:number}>()
);

export const updateCartItemQuantity = createAction(
    '[Cart] Update Item Quantity',
    props<{productId: number; quantity: number}>()
);

export const clearCart = createAction('[Cart] Clear');