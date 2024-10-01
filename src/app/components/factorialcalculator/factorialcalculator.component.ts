import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {

  factor: number = 0;
  result: string = "";
  
  factorial(factor : number){
    let number = 1;
    if(factor < 0){
       this.result = "Error! Number is Negative";
    }else if(factor === 0){
       this.result = "Factorial is 1"; 
    }else{
      for(let counter = 2; counter<=factor;counter++){
          number = number * counter;
      }
      this.result = "Factorial is " + number;
    }
  }
}
