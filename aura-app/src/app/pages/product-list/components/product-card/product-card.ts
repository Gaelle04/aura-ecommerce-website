import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons } from '../../../../shared/components/buttons/buttons';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, Buttons],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  @Input() product: any; 
  @Output() add = new EventEmitter(); 

  handleAddToCart() {
    this.add.emit(this.product);
  }
}

