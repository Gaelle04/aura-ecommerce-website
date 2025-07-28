import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/services/product.service.ts';
import { IProduct } from '@app/shared/models/IProduct.model';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-list/components/product-card/product-card';
import { unslugifyCategory } from '@app/shared/utils/slugify';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug') || '';
  category = unslugifyCategory(this.slug);

  products = signal<IProduct[]>([]);
  filteredProducts = signal<IProduct[]>([]);

  constructor() {
    this.productService.getProducts().subscribe(data => {
      this.products.set(data);
      const filtered = data.filter(
        p => p.category.toLowerCase() === this.category.toLowerCase()
      );
      this.filteredProducts.set(filtered);
    });
  }
}
