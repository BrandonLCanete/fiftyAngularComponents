import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
    evenOdd: number = 0;
    result: string = "";

    Check(){
       if(this.evenOdd % 2==0){
           this.result = "The number is Even";
       }else{
           this.result = "The number is Odd";
       }
    }
}
