import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  productTypes: any

  constructor(
    private http: HttpClient,
  ) {}

  restAllProductTypes() {
    return this.http.get<any>('http://localhost:3000/productTypes/get')
      .pipe(map(data => {
        if(data) {
          this.productTypes = data;
        }
        return this.productTypes;
      }));
  }

  restOneProductType(productType_id: any) {
    return this.http.get<any>(`http://localhost:3000/productTypes/get/${productType_id}`)
      .pipe(map(data => {
        if(data) {
          this.productTypes = data;
        }
        return this.productTypes;
      }));
  }

  createProductType(productTypeData:any){
    return this.http.post<any>('http://localhost:3000/productTypes/create', productTypeData)
      .pipe(map(data => {
        return data;
      }));
  }

  updateProductType(productType_id: any, productTypeData: any) {
    return this.http.patch<any>(`http://localhost:3000/productTypes/patch/${productType_id}`, productTypeData)
      .pipe(map(data => {
        return data;
      }));
  }

  deleteProductType(productType_id: any) {
    return this.http.delete<any>(`http://localhost:3000/productTypes/delete/${productType_id}`)
      .pipe(map(data => {
        return data;
      }));
  }
}
