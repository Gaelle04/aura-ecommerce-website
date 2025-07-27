import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service.ts';
import { IProduct } from '@app/shared/models/IProduct.model';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import { ProductCard } from './components/product-card/product-card';
import { AppState } from '../../app.state';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-list',
  imports: [ ProductCard, CommonModule, RouterLink],
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





}
