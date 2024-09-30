import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
    shop: string[] = [];
    items: string = "";

    Add(){
       this.shop.push(this.items);
    }

    Remove(index: number){
      this.shop.splice(index, 1)
    }
}
