import { Component , OnInit} from '@angular/core';
import { Buttons } from '../../shared/components/buttons/buttons';
import { IProduct } from '../../services/product.service.ts';
import { ProductService } from '../../services/product.service.ts';
import { NewArrivals } from './components/new-arrivals/new-arrivals';
import { FeaturedCategories } from './components/featured-categories/featured-categories';
import { RecommendedForYou } from './components/recommended-for-you/recommended-for-you';


@Component({
  selector: 'app-home',
  imports:[Buttons, NewArrivals, FeaturedCategories, RecommendedForYou],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home implements OnInit {

  images = [
    'assets/hero1.png',
    'assets/hero2.png',
    'assets/hero3.png'
  ];

  currentIndex = 0;
  
  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  arrivals: IProduct[] = [];

constructor(private productService: ProductService) {}

ngOnInit() {
  this.productService.getProducts().subscribe((products: IProduct[]) => {
    this.arrivals = products.slice(0, 5);
  });
}
}
