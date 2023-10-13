import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ShowproducttypeComponent } from './components/showproducttype/showproducttype.component';
import { ProducttypeDetailComponent } from './components/producttype-detail/producttype-detail.component';
import { CreateproducttypeComponent } from './components/createproducttype/createproducttype.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'products/goods/:id', component: GoodsComponent },
  { path: 'showproducttype', component: ShowproducttypeComponent },
  { path: 'showproducttype/producttype/:id', component: ProducttypeDetailComponent },
  { path: 'showproducttype/createproducttype', component: CreateproducttypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
