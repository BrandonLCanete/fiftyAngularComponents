import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
    numberOne: number = 0;
    numberTwo: number = 0;
    result: string  = "";

    Check(){
       if(this.numberOne % this.numberTwo === 0){
          this.result = this.numberOne + " is divisible by " + this.numberTwo;
       }else{
          this.result = this.numberOne + " is not divisible by " + this.numberTwo;
       }
    }
}
