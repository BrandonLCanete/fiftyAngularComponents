import { Component } from '@angular/core';


@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {

      number: any = null;
      noOfTries: any = null;
      deviation: any = null;
      original: any = null;

     constructor(){
       this.Restart();
     }

     Restart(){
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.number = null;
        this.deviation = null;
     }

     Verify(){
        this.deviation = this.original - this.number;
        this.noOfTries = this.noOfTries + 1;
      }

}
