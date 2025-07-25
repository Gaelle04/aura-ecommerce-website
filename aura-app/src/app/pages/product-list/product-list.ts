import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service.ts';
import { IProduct } from '../../shared/models/product.model';
import{NgFor} from '@angular/common';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import { ProductCard } from './components/product-card/product-card';
import { ICartItem } from '../../shared/models/cart-item.model';
import { addToCart } from '../cart/cart.actions';
import { AppState } from '../../app.state';


@Component({
  selector: 'app-product-list',
  imports: [NgFor, ProductCard, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{

  products: IProduct[]=[];
  constructor(private productService: ProductService, private store:Store<AppState>){}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });

}
trackByProductId(index: number, product:IProduct): number{
  return product.id;
}



addToCart(product: any) {
  console.log('Adding to cart:', product);
  const item: ICartItem = {
    product,
    quantity: 1
  };

  this.store.dispatch(addToCart({ item }));
}
}
