import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';
import { CartState, initialCartState } from './cart.states';

export const cartReducer = createReducer(
    
  initialCartState,
  on(addToCart, (state: { items: any[]; }, { item }: any) => {
    const existing = state.items.find((i: { product: { id: any; }; }) => i.product.id === item.product.id);
    if (existing) {
      return {
        ...state,
        items: state.items.map((i: {product: { id: any; }; quantity: any; }) =>
          i.product.id === item.product.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, item]
      };
    }
  }),

  on(removeFromCart, (state: { items: any[]; }, { productId }: any) => ({
    ...state,
    items: state.items.filter((i: { product: { id: any; }; }) => i.product.id !== productId)
  })),

  on(clearCart, () => initialCartState)
);
