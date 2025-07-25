import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../shared/models/product.model';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../../../services/product.service.ts';
import {Store} from '@ngrx/store';
import { AppState } from '../../../../app.state';


@Component({
  selector: 'app-recommended-for-you',
  imports: [ProductCard, CommonModule],
  templateUrl: './recommended-for-you.html',
  styleUrl: './recommended-for-you.scss'
})
export class RecommendedForYou implements OnInit {
  @Input() RecommendedForYou: IProduct[]=[];
<<<<<<< HEAD
  constructor(private productService: ProductService, private store: Store<AppState>){}
=======
  constructor(private productService: ProductService){}
>>>>>>> 9fd5e340d8c965fd7145e0fabc6da19de5df579f
  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.RecommendedForYou = products.slice(15, 20);
    });
  }

  trackByProductId(index: number, product:IProduct): number{
    return product.id;
}



}
