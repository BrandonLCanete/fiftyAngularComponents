import { Component, OnInit } from '@angular/core';
import { InterestCalculator } from './interestcalculator.model';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent implements OnInit{
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    interestModel: InterestCalculator = {principal:0,rate:0,time:0};

    Calculate(){

        this.interestModel.logic = (this.interestModel.principal * this.interestModel.rate * this.interestModel.time) / 100;

        this.interestModel.result = "Simple Interest : " +  this.interestModel.logic;

    }

}
