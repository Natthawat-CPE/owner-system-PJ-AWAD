import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  product: any;

  constructor
  (
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) 
  
  {
    this.getOneProduct();
  }

  ngOnInit(): void {
  }

  getOneProduct() {
    try{
      let product_id = this.activatedRoute.snapshot.paramMap.get('id');
      this.productService.restOneProduct(product_id).subscribe(
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

  // getOneProduct() {
  //   let product_id = this.activatedRoute.snapshot.paramMap.get('id');
  //   console.log(typeof product_id)
  //   this.http.get<any>(`http://localhost:3000/products/${product_id}`).subscribe(
  //     response => {
  //       this.product = response;
  //       console.log(this.product);
  //     })
  // }
}
