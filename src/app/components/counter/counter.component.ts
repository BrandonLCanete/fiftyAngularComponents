import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    count: number = 1;
    counter: number = 0;
    counterPrint: string = "";
    onButtonClick(){
      this.counter = this.count++;
      this.counterPrint = "The counter button is clicked " + this.counter + " times";
    }
}
