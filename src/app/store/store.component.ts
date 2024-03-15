import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})

export class StoreComponent{

  constructor(private _groceryService: GroceryService) {}

  items = this._groceryService.getGroceries()

}