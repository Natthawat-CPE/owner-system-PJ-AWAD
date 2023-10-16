import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { myFavorite } from '../components/my-favorite-icon/my-favorite.modale';

@Injectable({
  providedIn: 'root'
})
export class MyFavoriteService {
  counter:number = 0;
  product: any;
  
  cart: myFavorite = [];

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


  getOneProduct(_id:string) {
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

//  TODO สร้าง Function ที่ Get เอา Product  ที่มีการกด <3 ไว้ เอาแค่ของ User คนนั้นด้วย



// TODO สร้าง Function ที่ Insert Data ลง DB ว่ามีการกด Favorite


// TODO สร้าง Function ที่ pop


}
