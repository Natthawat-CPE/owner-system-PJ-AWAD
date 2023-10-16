import { Component } from '@angular/core';
import { MyFavoriteService } from 'src/app/services/my-favorite.service';
import { myFavorite } from './my-favorite.modale';

@Component({
  selector: 'app-my-favorite-icon',
  templateUrl: './my-favorite-icon.component.html',
  styleUrls: ['./my-favorite-icon.component.css']
})
export class MyFavoriteIconComponent {

  product:any;
  
  
  
  cart: myFavorite = [];
  
  constructor(private myFavoriteService:MyFavoriteService){
    this.cart = this.myFavoriteService.getCart();
  }

  ngOnInit(): void {
      
  }

  getCounter(){
    return this.myFavoriteService.getCounter();
  }


}
