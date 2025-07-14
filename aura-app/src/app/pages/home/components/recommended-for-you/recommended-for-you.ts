import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../services/product.service.ts';
import { ProductCard } from '../../../product-list/components/product-card/product-card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recommended-for-you',
  imports: [ProductCard, CommonModule],
  templateUrl: './recommended-for-you.html',
  styleUrl: './recommended-for-you.scss'
})
export class RecommendedForYou {
  @Input() arrivals: IProduct[]=[];
}
