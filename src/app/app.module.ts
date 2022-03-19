import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AddalbumComponent } from './components/addalbum/addalbum.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { AddCustomerComponent } from './components/addCustomer/addCustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumdetailsComponent } from './components/albumdetails/albumdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddalbumComponent,
    ShopComponent,
    CartComponent,
    AddCustomerComponent,
    AlbumdetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
