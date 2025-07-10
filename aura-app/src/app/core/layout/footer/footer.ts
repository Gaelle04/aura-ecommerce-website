import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
