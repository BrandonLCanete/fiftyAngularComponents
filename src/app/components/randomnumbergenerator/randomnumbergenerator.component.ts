import { Component, OnInit } from '@angular/core';
import { RandomNumberGenerator } from './randomnumbergenerator.model';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent implements OnInit{
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    randomNumberGenerator: RandomNumberGenerator = {minimum: 0,maximum: 0};
    
    Random(){

      const getRandomNumber = (minimum:number,maximum:number) : number => {
          minimum = Math.ceil(minimum);
          maximum = Math.floor(maximum);

          return Math.floor(Math.random() * (maximum - minimum)) + minimum;
      }

      this.randomNumberGenerator.logic = getRandomNumber(this.randomNumberGenerator.minimum,this.randomNumberGenerator.maximum);

      this.randomNumberGenerator.result = "The Random Number is : "+ this.randomNumberGenerator.logic;
      
    }
}
