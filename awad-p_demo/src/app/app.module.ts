import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { SearchComponent } from './components/search/search.component';
import { ShowproducttypeComponent } from './components/showproducttype/showproducttype.component';
import { ProducttypeDetailComponent } from './components/producttype-detail/producttype-detail.component';
import { CreateproducttypeComponent } from './components/createproducttype/createproducttype.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { MyFavoriteIconComponent } from './components/my-favorite-icon/my-favorite-icon.component';
import { MyFavoriteComponent } from './components/my-favorite/my-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent,
    HomeComponent,
    GoodsComponent,
    SearchComponent,
    ShowproducttypeComponent,
    ProducttypeDetailComponent,
    CreateproducttypeComponent,
    EditProductComponent,
    CartIconComponent,
    MyFavoriteIconComponent,
    MyFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
