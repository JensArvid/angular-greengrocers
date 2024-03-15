import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent {

  total: number = 0.00;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getTotal().subscribe(total => {
      this.total = total;
      console.log(total)
    })
  }
}