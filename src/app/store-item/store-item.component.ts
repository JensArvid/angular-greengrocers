import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private cartService: CartService) {}

  addToCart(i: Item) {
    this.cartService.addToCart(i);
  }

}