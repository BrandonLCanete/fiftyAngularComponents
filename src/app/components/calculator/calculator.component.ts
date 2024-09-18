import { Component, OnInit } from '@angular/core';
import { CalculatorModel } from './calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  calculatorModel : CalculatorModel = {one: 0,two: 0};
  
  Add(){
    this.calculatorModel.calculate = this.calculatorModel.one + this.calculatorModel.two;
    this.calculatorModel.result = this.calculatorModel.calculate;
  }
  Minus(){
    this.calculatorModel.calculate = this.calculatorModel.one - this.calculatorModel.two;
    this.calculatorModel.result = this.calculatorModel.calculate;
  }
  Multiply(){
    this.calculatorModel.calculate = this.calculatorModel.one * this.calculatorModel.two;
    this.calculatorModel.result = this.calculatorModel.calculate;
  }
  Divide(){
    this.calculatorModel.calculate = this.calculatorModel.one / this.calculatorModel.two;
    this.calculatorModel.result = this.calculatorModel.calculate;
  }
}
