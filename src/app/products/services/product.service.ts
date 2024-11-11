import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Mesa comedor',
      description: 'Excelente mesa para el comedor',
      price: 700
    },
    {
      id: 2,
      name: 'Teclado mecanica',
      description: 'Excelente teclado para typing',
      price: 500
    }
  ];
  
  private url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    //return of(this.products);
    return this.http.get<Product[]>(this.url).pipe(
      map((response: any) => response._embedded.products as Product[]),
    );
  }
}
