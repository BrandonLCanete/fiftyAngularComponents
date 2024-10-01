import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
    oddNumber: number = 0;
    result: string = "";

    Calculate(){
       let add = 0;

       for(let counter = 1; counter<=this.oddNumber;counter++){
          if(counter % 2 !== 0){
             add += counter;
          }
       }
       this.result = "The sum of odd numbers is : " + add;
    }
}
