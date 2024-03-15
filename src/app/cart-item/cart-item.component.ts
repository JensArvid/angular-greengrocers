import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private cartService: CartService) {}

  addOne(item: Item) {
    if(item) {
      this.cartService.addToCart(item);
    }
  }

  removeOne(item: Item) {
    if(item) {
      this.cartService.removeFromCart(item);
    }
  }
}