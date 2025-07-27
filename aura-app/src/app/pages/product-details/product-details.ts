import { Component, Input, OnInit, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/services/product.service.ts';
import { IProduct } from '@app/shared/models/IProduct.model';
import { CommonModule } from '@angular/common';
import { Buttons } from '@app/shared/components/buttons/buttons';
import { FavoritesService } from '@app/shared/services/favoritesService/favorites.service';
import { MatIconModule } from '@angular/material/icon';
import { ICartItem } from '@app/shared/models/cart-item.model';
import { CartService } from '@app/shared/services/cartService/cart.service';



@Component({
  selector: 'app-product-details',
  imports: [CommonModule, Buttons, MatIconModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {
  

  product !: IProduct;
  isFavorite!: Signal<boolean>;
  @Input() showAddToCart: boolean= true;
  
constructor(private route: ActivatedRoute, private productService: ProductService, private favService: FavoritesService, private cartService: CartService){}


  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (data) =>{
        (this.product = data),
        this.isFavorite = this.favService.isFavorite(this.product.id);
      } ,

      error: (err) => console.error('Product fetch failed:', err)
    });

    
  }

  toggleFavorite(){
    if (this.product) {
      this.favService.toggle(this.product);
    }
  }
  
  handleAddToCart(product :IProduct) {
    const item: ICartItem={
      product, 
      quantity:1,
    }
    this.cartService.addItem(item);
  }



}
