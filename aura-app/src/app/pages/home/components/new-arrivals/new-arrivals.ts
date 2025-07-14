import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../services/product.service.ts';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, ProductCard],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss'
})
export class NewArrivals {
  @Input() arrivals: IProduct[]=[];

}
