import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {
  @Input() label: string = 'Add to Cart';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
