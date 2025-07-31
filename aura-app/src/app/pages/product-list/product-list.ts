import { Component, computed, OnInit, signal } from '@angular/core';
import { ProductService} from '../../services/product.service.ts';
import { IProduct } from '@app/shared/models/IProduct.model';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import { ProductCard } from './components/product-card/product-card';
import { AppState } from '../../app.state';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-product-list',
  imports: [ ProductCard, CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{

  minPrice: number | null= null;
  maxPrice: number | null= null;

  products = signal<IProduct[]>([]);
  filteredProducts= signal<IProduct[]>([]);

  constructor(private productService: ProductService, private store:Store<AppState>){}

  



  Apply(){
    const min = this.minPrice ?? 0;
    const max = this.maxPrice ?? Infinity;

    const result = this.products().filter(p => {
      const price = (p as any).price ?? 0;
      return price >= min && price <= max;
    });

    this.filteredProducts.set(result);
  }

  clearFilter(){
    this.minPrice = null;
    this.maxPrice = null;
    this.filteredProducts.set([...this.products()]);
  }


  ngOnInit() {
    this.productService.getProducts().subscribe((data: IProduct[] = []) => {
      this.products.set(data);
      this.filteredProducts.set(data);
    });

}


private getPrice(p: IProduct): number {
  return (p as any).price ?? (p as any).Price ?? 0;
}

trackByProductId(index: number, product:IProduct): number{
  return product.id;
}





}
