import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any
  product: any

  constructor(
    private http: HttpClient,
  ) {}

  restAllProducts() {
    return this.http.get<any>('http://localhost:3000/products/get')
      .pipe(map(data => {
        if(data) {
          this.products = data;
        }
        return this.products;
      }));
  }

  restOneProduct(product_id: any) {
    return this.http.get<any>(`http://localhost:3000/products/get/${product_id}`)
      .pipe(map(data => {
        if(data) {
          this.product = data;
        }
        return this.product;
      }));
  }

  createProduct(productData:any){
    return this.http.post<any>('http://localhost:3000/products/create', productData)
      .pipe(map(data => {
        return data;
      }));
  }

  updateProduct(product_id: any, productData: any) {
    return this.http.put<any>(`http://localhost:3000/products/patch/${product_id}`, productData)
      .pipe(map(data => {
        return data;
      }));
  }

  deleteProduct(product_id: any) {
    return this.http.delete<any>(`http://localhost:3000/products/delete/${product_id}`)
      .pipe(map(data => {
        return data;
      }));
  }

}
