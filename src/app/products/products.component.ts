import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {
  visible: boolean = false;


  products: Products[];
  cartProducts: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
   /*this.cartProducts = [{
      title: string;
      price: string;
      }]*/

    this.products = [{
      id: 1,
      title: 'Name 1',
      price: 10,
      description: 'lorem'
    },
    {
      id: 2,
      title: 'Name 2',
      price: 20,
      description: 'lorem'
    },
    {
      id: 3,
      title: 'Name 3',
      price: 3,
      description: 'lorem'
    }];
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }

  addToCard(i){
    this.cartProducts.push({
      title: this.products[i].title,
      price: this.products[i].price,
      isAdded: true,
      length: 2
      });
  }

}
