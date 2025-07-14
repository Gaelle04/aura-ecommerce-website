import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {
  @Input() label: string = 'Add to Cart';
  @Output() clicked = new EventEmitter<void>();
  @Input() routeTo ?: string;

  constructor(private router: Router){}

  handleClick() {
    console.log('Button clicked, routerLink:', this.routeTo);
    if (this.routeTo) {
      this.router.navigate([this.routeTo]);
    } else {
      this.clicked.emit(); 
    }
  }
}
