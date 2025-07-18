import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }
}
