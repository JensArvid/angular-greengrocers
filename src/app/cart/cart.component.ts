import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  items: Item[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe(items => {
      this.items = items;
      console.log(items)
    })
  }
}