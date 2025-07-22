import { Pipe, PipeTransform } from '@angular/core';
import { ICartItem } from '../models/cart-item.model';

@Pipe({
  name: 'totalPrice', 
  standalone: true
})


export class TotalPricePipe implements PipeTransform {

  transform(items: ICartItem[]| null | undefined): number {
    if(!items?.length) return 0;
    return items.reduce(
      (sum, item)=> sum + item.product.price * item.quantity
, 0);
  }

}
