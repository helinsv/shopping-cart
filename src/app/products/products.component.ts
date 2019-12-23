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
    let data = localStorage.getItem('cart');
    if ( data !== "null") {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }


    this.products = [{
      id: 1,
      title: 'Name 1',
      img: "../../assets/sl-1.svg",
      price: 10,
      description: 'lorem',
      isAdded: false,
    },
    {
      id: 2,
      title: 'Name 2',
      img: "../../assets/sl-2.svg",
      price: 20,
      description: 'lorem',
      isAdded: false,
    },
    {
      id: 3,
      title: 'Name 3',
      img: "../../assets/sl-3.svg",
      price: 3,
      description: 'lorem',
      isAdded: false,
    }];

  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  addToCard(i){
    let product = this.products[i];
    this.cartProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.products[i].isAdded = true;
  }

}
