import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@app/shared/models/IProduct.model';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';
import { ProductService } from '../../../../shared/services/productService/product.service.ts';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import { AppState } from '../../../../app.state';





@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, ProductCard, RouterModule, MatIconModule],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss'
})
export class NewArrivals implements OnInit {
  @Input() arrivals: IProduct[]=[];

  

  constructor(private productService : ProductService, private store:Store<AppState>){
  }

  


  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.arrivals = products.slice(0,5);
    });
  }

  trackByProductId(index:number, product:IProduct): number{
    return product.id;
  }



}
