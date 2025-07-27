import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@app/shared/models/IProduct.model';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../../../services/product.service.ts';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recommended-for-you',
  imports: [ProductCard, CommonModule, RouterLink],
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

  trackByProductId(index: number, product:IProduct): number{
    return product.id;
}



}
