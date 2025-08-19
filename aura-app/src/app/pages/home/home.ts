import { Component , OnInit, OnDestroy, NgZone} from '@angular/core';
import { Buttons } from '../../shared/components/buttons/buttons';
import { IProduct } from '../../shared/models/IProduct.model';
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


export class Home  {
  arrivals: IProduct[] = [];
  images = [
    'assets/hero1.png',
    'assets/hero2.png',
    'assets/hero3.png'
  ];

  currentIndex = 0;
  intervalId: any;
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.ngZone.run(() => {});
      }, 5000); 
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  
  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

 


}
