import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'products', component: ProductsComponent },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    }, {
      path: '**', component: AppComponent
    }
  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
