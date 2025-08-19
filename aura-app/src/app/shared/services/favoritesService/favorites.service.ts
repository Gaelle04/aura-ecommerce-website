import { Injectable, computed, effect, inject, signal, OnDestroy } from '@angular/core';
import { IProduct } from '@app/shared/models/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritesState = signal<IProduct[]>([]);
  readonly favoriteItems = computed(() => this.favoritesState());

  constructor() { 
    effect(() => {
      console.log('Favorites changed:', this.favoritesState());
    });
  }


  addItem(product : IProduct){
    if(!this.exists(product.id)){
      this.favoritesState.update(prev => [...prev, product]);
    }
  }

  exists(productId: number):boolean{
    return this.favoritesState().some(p => p.id === productId);
  }

  removeItem(productId: number){
    this.favoritesState.update(prev => prev.filter(p => p.id!== productId));
  }

  toggle(product : IProduct){
    this.exists(product.id)? this.removeItem(product.id) : this.addItem(product);
  }

  isFavorite(productId:number){
    return computed(() => this.favoritesState().some(p => p.id === productId));
  }
}
