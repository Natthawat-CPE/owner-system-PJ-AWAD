import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {


  product: any;

  ProductForm = new FormGroup({
    Product_Name: new FormControl(''),
    Product_Detail: new FormControl(''),
  });

  Product_Img = new FormControl('');


  // dataPatch = new FormGroup({
  //   Product_Name: new FormControl(this.ProductForm.controls['Product_Name'].value),
  //   Product_Detail: new FormControl(this.ProductForm.controls['Product_Detail'].value),
  //   Product_Img: new FormControl(this.Product_Img),
  // });


  previewLoaded: boolean = false;

  

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
          this.loadData();
        },
        err => {
          console.log(err);
        }
      )
    } catch(err) {
      console.log(err);
    }
  }

  loadData(){
    try {
      this.ProductForm.patchValue({
        Product_Name: this.product.Product_Name,
        Product_Detail: this.product.Product_Detail
      });
    } catch(err) {
      console.log(err);
    }
  }


  onChangeImg(e:any){
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.Product_Img.reset();
      } 
      else { 
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          const imageValue = reader.result ? reader.result.toString() : null;
          this.Product_Img.setValue(imageValue);
        }
      }
  }

  updateProduct() {
    let product_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.ProductForm.value);
    this.productService.updateProduct(product_id ,this.ProductForm.value).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err);
      }
    );

    if (this.Product_Img != null) {
      this.productService.updateProduct(product_id ,this.Product_Img.value).subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err);
        }
      );

    }
  }

  // updateProduct() {
  //   let product_id = this.activatedRoute.snapshot.paramMap.get('id');
  //   let productData = this.ProductForm.value;
  //   console.log('TEST');
  //   return this.http.patch<any>(`http://localhost:3000/products/patch/${product_id}`, productData)
  //     .pipe(map(data => {
  //       return data;
  //     }));
  // }



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
