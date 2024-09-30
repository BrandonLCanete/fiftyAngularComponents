import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
    amount: number = 0;
    result: number = 0;
    pesos: number = 56;

    Convert(){
      this.result = this.amount / this.pesos;
    }
}
