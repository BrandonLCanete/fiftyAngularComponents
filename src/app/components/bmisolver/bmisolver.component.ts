import { Component, OnInit } from '@angular/core';
import { BmiSolver } from './bmisolver.model';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent implements OnInit{

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    bmiModel: BmiSolver = {height: 0, weight: 0};

    Submit(){
      this.bmiModel.logic = this.bmiModel.weight / (this.bmiModel.height * this.bmiModel.height) ;
      if(this.bmiModel.logic <= 18.4){
        this.bmiModel.result = "Your BMI is: " + this.bmiModel.logic;
        this.bmiModel.category = "Underweight";
      }else if(this.bmiModel.logic >= 18.5 && this.bmiModel.logic <= 24.9){
        this.bmiModel.result = "Your BMI is: " + this.bmiModel.logic;
        this.bmiModel.category = "Normal weight";
      }else if(this.bmiModel.logic >= 25 && this.bmiModel.logic <= 29.9){
        this.bmiModel.result = "Your BMI is: " + this.bmiModel.logic;
        this.bmiModel.category = "Overweight";
      }else{
        this.bmiModel.result = "Your BMI is: " + this.bmiModel.logic;
        this.bmiModel.category = "Obesity";
      }
    }
}
