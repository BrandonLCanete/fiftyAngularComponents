import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
    amount: number = 0;
    currency: string = "$";
    result: string = "";

    Format(){
       switch(this.currency){
          case "$":
            this.result = "Formatted Currency : " + this.currency + " " + this.amount + ".00";
            break;
          case "¥":
            this.result = "Formatted Currency : " + this.currency + " " + this.amount + ".00";
            break;
          case "₱":
            this.result = "Formatted Currency : " + this.currency + " " + this.amount + ".00";
            break;
          case "€":
            this.result = "Formatted Currency : " + this.currency + " " + this.amount + ".00";
            break;
          case "₩":
            this.result = "Formatted Currency : " + this.currency + " " + this.amount + ".00";
            break;
       }
    }
}
