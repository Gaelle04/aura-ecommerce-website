import { Component } from '@angular/core';
import { Buttons } from '../../shared/components/buttons/buttons';

@Component({
  selector: 'app-home',
  imports:[Buttons],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home  {

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
}
