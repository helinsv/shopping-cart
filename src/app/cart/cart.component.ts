import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  bill: number;

  constructor() { }

  cartProducts: any;

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    let data = localStorage.getItem('cart');
    if ( data !== null) {
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.cartProducts[i].qt = 1;
        this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
      }

    } else {
      this.cartProducts = [];
    }
  }

  UpdateToTotal() {
    this.bill = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
    }
  }

  deleteItem(item) {
    this.cartProducts.splice(item, 1);
   // this.bill = this.bill - this.cartProducts[item].price;
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem('cart', null);
      localStorage.removeItem('cart');
    }
  }

  PayBills() {
    if (this.cartProducts.length) {
      localStorage.removeItem('cart');
      this.initiateData();
      alert('Your bill is ' + this.bill);
    } else {
      alert('No items in a cart');
    }

  }
}
