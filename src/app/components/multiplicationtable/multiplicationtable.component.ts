import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
      multiply: number = 0;
      generate: number[] = [];
      title: string = "";

      Multiplication(){
          this.generate = [];
          if(this.multiply !== null && this.multiply !== 0){
             this.title = "Multiplication Table for " + this.multiply;
             for(let counter = 1;counter<=10;counter++){
                this.generate.push(this.multiply * counter);
             }
          }
      }
}
