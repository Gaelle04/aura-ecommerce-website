import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct } from '../../services/product.service.ts';
import{NgFor} from '@angular/common';
import { Buttons } from '../../shared/components/buttons/buttons';
@Component({
  selector: 'app-product-list',
  imports: [NgFor, Buttons],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{
  products: IProduct[]=[];
  constructor(private productService: ProductService){}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });

}

addToCart(product: any) {
  console.log('Adding to cart:', product);
  // You can call a CartService here if you have one
}

}
