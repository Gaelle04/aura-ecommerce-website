import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../services/product.service.ts';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../../../services/product.service.ts';

@Component({
  selector: 'app-recommended-for-you',
  imports: [ProductCard, CommonModule],
  templateUrl: './recommended-for-you.html',
  styleUrl: './recommended-for-you.scss'
})
export class RecommendedForYou implements OnInit {
  @Input() RecommendedForYou: IProduct[]=[];
  constructor(private productService: ProductService){}
  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.RecommendedForYou = products.slice(15, 20);
    });
  }

}
