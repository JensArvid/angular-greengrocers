import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  constructor(private httpClient: HttpClient) {}

  private API = 'https://boolean-api-server.fly.dev/groceries'

  async getGroceries(): Promise<Item[]> {
    const items = await firstValueFrom(
      this.httpClient.get<Item[]>(`${this.API}`)
    );
    return items;
  }


}