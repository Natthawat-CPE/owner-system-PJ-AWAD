import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createproducttype',
  templateUrl: './createproducttype.component.html',
  styleUrls: ['./createproducttype.component.css']
})
export class CreateproducttypeComponent implements OnInit{

  productTypeData = new FormGroup({
    ProductType_Name: new FormControl('')
  })

  constructor(
    private productTypeService: ProductTypeService
  ) {}

  ngOnInit(): void {
      
  }

  createProductType() {
    this.productTypeService.createProductType(this.productTypeData.value).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err);
      }
    );
  }
}
