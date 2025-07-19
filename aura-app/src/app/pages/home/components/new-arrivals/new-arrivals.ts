import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../services/product.service.ts';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../../../services/product.service.ts';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, ProductCard, RouterModule, MatIconModule],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss'
})
export class NewArrivals implements OnInit {
  @Input() arrivals: IProduct[]=[];
  constructor(private productService : ProductService){}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.arrivals = products.slice(0,5);
    });
  }

}
