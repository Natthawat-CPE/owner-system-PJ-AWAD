import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productsType } from './cartProduct.modale';


@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {


  product:any;
  
  
  
  cart: productsType = [];
  
  constructor(private cartService:CartService){
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
      
  }

  getCounter(){
    return this.cartService.getCounter();
  }

  getSumPrice(){
    return this.cartService.getsumPrice();
  }

}
