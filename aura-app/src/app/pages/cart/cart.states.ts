import { ICartItem } from "../../shared/models/cart-item.model";

export interface CartState {
    items: ICartItem[];
}

export const initialCartState: CartState ={
    items:[]
};