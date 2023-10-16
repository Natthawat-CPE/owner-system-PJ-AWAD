import { Injectable } from '@angular/core';
import { productsType } from '../components/cart-icon/cartProduct.modale';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter:number = 0;
  sumPrice: number = 0;
  product: any;
  
  cart: productsType = [];

  constructor(  
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
  ) 

  {

  }

  add(p_id:string){
    console.log('Add product id: '+p_id+' to cart');
    this.counter +=1;
  }

  getCounter(){
    return this.counter;
  }


  getCart(){
    return this.cart;
  }

  getsumPrice(){
    return this.sumPrice;
  }

  getOneProduct(_id:number) {
    try{
     this.productService.restOneProduct(_id).subscribe(
       data => {
         this.product = data;
       },
       err => {
         console.log(err);
       }
     )
   } catch(err) {
     console.log(err);
   }
 }
}
