import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product-page/product';
import Register from './Interfaces/register';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _httpClient = inject(HttpClient)


  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>('https://fakestoreapi.com/products')
  }

}
