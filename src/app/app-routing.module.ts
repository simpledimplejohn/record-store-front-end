import { SearchComponent } from './components/search/search.component';
import { AddalbumComponent } from './components/addalbum/addalbum.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "addalbum", component: AddalbumComponent},
  {path : "search", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
