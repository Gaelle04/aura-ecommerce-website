import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '@app/shared/models/IProduct.model';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getProductById(id:number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }
}
