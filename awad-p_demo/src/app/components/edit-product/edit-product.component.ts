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
  status_Hot?: boolean;
  status_Cold?: boolean;
  status_Frappe?: boolean;

  numberType:number[] =[];
  activePageType!:number;

  ProductForm = new FormGroup({
    Product_Name: new FormControl(''),
    Product_Detail_Hot: new FormControl(''),
    Product_Price_Hot: new FormControl(''),
    Product_Img_Hot: new FormControl(''),
  });

  //TODO For HTML
  ProductFormDisplay = new FormGroup({
    Product_Name: new FormControl(''),
    Product_Detail: new FormControl(''),
    Product_Price: new FormControl(''),
    Product_Img: new FormControl(''),
  });

  //TODO For Save DB 
  ProductFormSave = new FormGroup({
    Product_Name: new FormControl(''),
    Product_Detail: new FormControl(''),
    Product_Price: new FormControl(''),
    Product_Img: new FormControl(''),
  });


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

  // TODO for changeNameFormControl and pull Data
  renameFormControlAndPull(formGroup:FormGroup, oldName:string, newName:string) {
    // ดึงค่า FormControl จากชื่อเดิม
    const oldControl = formGroup.get(oldName);

    // สร้าง FormControl ใหม่ด้วยค่าเดิม
    const newControl = new FormControl(oldControl?.value);

    // ลบ FormControl เดิมออกจาก FormGroup
    formGroup.removeControl(oldName);

    // เพิ่ม FormControl ใหม่เข้าไปด้วยชื่อใหม่
    formGroup.addControl(newName, newControl);
}

  // TODO for changeNameFormControl ONLY !!!
  renameFormControl(formGroup:FormGroup, oldName:string, newName:string) {
    // สร้าง FormControl ใหม่ด้วยค่าเดิม
    const newControl = new FormControl('');
    // ลบ FormControl เดิมออกจาก FormGroup
    formGroup.removeControl(oldName);
    // เพิ่ม FormControl ใหม่เข้าไปด้วยชื่อใหม่
    formGroup.addControl(newName, newControl);
}

  checkData(){
    try{
      if (this.product.Product_IsHot == true){
        this.numberType.push(1);
      }
      if (this.product.Product_IsCold == true){
        this.numberType.push(2);
      }
      if (this.product.Product_IsFrappe == true){
        this.numberType.push(3);
      }
      this.activePageType = this.numberType[0];

      if (this.activePageType == 1) {
        

      }
      


    } catch(err){
      console.log(err);
    }
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
        Product_Detail_Hot: this.product.Product_Detail_Hot,
        Product_Price_Hot: this.product.Product_Price_Hot,
        Product_Img_Hot: this.product.Product_Img_Hot
      });
    } catch(err) {
      console.log(err);
    }
  }


  onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.ProductForm.patchValue({
          Product_Img_Hot: reader.result?.toString()
        })
      }
    }
  }

  updateProduct() {
    let product_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.ProductForm.value);
    this.productService. updateProduct (product_id ,this.ProductForm.value).subscribe(
       data => {
        console.log(data)
      },
      err => {
        console.log(err);
      }
    );
  }

}
