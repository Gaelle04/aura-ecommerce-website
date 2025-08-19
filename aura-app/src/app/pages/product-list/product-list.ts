import { Component, inject, OnInit, signal, OnDestroy } from '@angular/core';
import { ProductService} from '../../shared/services/productService/product.service.ts';
import { IProduct } from '@app/shared/models/IProduct.model';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import { ProductCard } from './components/product-card/product-card';
import { AppState } from '../../app.state';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  Subject, Subscription, takeUntil } from 'rxjs';




@Component({
  selector: 'app-product-list',
  imports: [ ProductCard, CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit, OnDestroy{

  minPrice: number | null= null;
  maxPrice: number | null= null;
  products = signal<IProduct[]>([]);
  filteredProducts= signal<IProduct[]>([]);
 

  constructor(private productService: ProductService, private store:Store<AppState>){
  }

  private subscription!: Subscription;
  private route = inject(ActivatedRoute);
  private Destroy$ =  new Subject<void>();



  Apply(){
    const min = this.minPrice ?? 0;
    const max = this.maxPrice ?? Infinity;

    const result = this.filteredProducts().filter(p => {
      const price = p.price;
      return price >= min && price <= max;
    });

    this.filteredProducts.set(result);
  }

  clearFilter(){
    this.minPrice = null;
    this.maxPrice = null;
    this.applySearchFromQuery();
  }


  ngOnInit() {
    this.subscription=this.productService.getProducts().subscribe((data: IProduct[] = []) => {
      this.products.set(data);
      this.filteredProducts.set(data);
      this.applySearchFromQuery();
    });

    this.route.queryParamMap.pipe(takeUntil(this.Destroy$)).subscribe(() => this.applySearchFromQuery());

}

ngOnDestroy(){
 this.subscription.unsubscribe();
 this.Destroy$.next();
 this.Destroy$.complete();
}

private applySearchFromQuery() {
  const q = (this.route.snapshot.queryParamMap.get('q') ?? '').trim().toLowerCase();

  if(!q){
    this.filteredProducts.set([...this.products()]);
    return;
  }
  const filtered = this.products().filter(p =>
    (p.title ?? '').toLowerCase().includes(q)
  );
  this.filteredProducts.set(filtered);
}


trackByProductId(index: number, product:IProduct): number{
  return product.id;
}

}
