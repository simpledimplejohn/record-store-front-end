import { AlbumdetailsComponent } from './components/albumdetails/albumdetails.component';
import { AddalbumComponent } from './components/addalbum/addalbum.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { AddCustomerComponent } from './components/addCustomer/addCustomer.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "addalbum", component: AddalbumComponent},
  {path : "shop", component: ShopComponent},
  {path : "cart", component: CartComponent},
  {path : "addCustomer", component: AddCustomerComponent},
  {path : "albumdetails", component: AlbumdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
