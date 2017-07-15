import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProductList} from './views/products/productlist/productList.component';
import {Product} from './views/products/productlist/product/product.component';
import {ProductPrice} from './views/products/productlist/product/productPrice/productPrice.component';
import {ProductInfo} from './views/products/productlist/product/productInfo/productInfo.component';
import {ProductImage} from './views/products/productlist/product/productImage/productImage.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    Product,
    ProductPrice,
    ProductInfo,
    ProductImage
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
