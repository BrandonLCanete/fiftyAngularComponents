import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
    fibo: number = 0;
    logic: number[] = [];

    Generate(num : number){
       let fib: number[] = [0,1];
       for(let counter = 2; counter < num ; counter++){
          fib[counter] = fib[counter - 1] + fib[counter - 2];
       }
       this.logic =  fib.slice(0, num);
    }
}
