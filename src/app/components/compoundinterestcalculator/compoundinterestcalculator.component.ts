import { Component, OnInit } from '@angular/core';
import { CompoundInterestCalculator } from './compoundinterestcalculator.model';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  compoundModel: CompoundInterestCalculator = {principal:0,rate:0,time:0,frenquency:1};

  Calculate(){
     
    if(this.compoundModel.principal !== null && this.compoundModel.rate !== null && this.compoundModel.time !== null){
      
      const decimalRate = this.compoundModel.rate/100;

      this.compoundModel.Amount = this.compoundModel.principal * Math.pow((1 + decimalRate/ this.compoundModel.frenquency), this.compoundModel.frenquency * this.compoundModel.time);

      this.compoundModel.Compound = this.compoundModel.Amount- this.compoundModel.principal;

      this.compoundModel.Compound_Result = "The Compound Interest is : " + this.compoundModel.Compound;

      this.compoundModel.Amount_Result = "The Total Amount is : " + this.compoundModel.Amount;
    }


  }

}
