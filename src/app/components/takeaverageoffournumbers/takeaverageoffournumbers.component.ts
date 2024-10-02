import { Component, OnInit } from '@angular/core';
import { TakeAverageOfFourNumbers } from './takeaverageoffournumbers.model';

@Component({
  selector: 'app-takeaverageoffournumbers',
  templateUrl: './takeaverageoffournumbers.component.html',
  styleUrl: './takeaverageoffournumbers.component.css'
})
export class TakeaverageoffournumbersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  averageModel: TakeAverageOfFourNumbers = {numOne:0,numTwo:0,numThree:0,numFour:0};

  Average(){
     
      this.averageModel.logic = (this.averageModel.numOne + this.averageModel.numTwo + this.averageModel.numThree + this.averageModel.numFour) / 4;

      this.averageModel.result = "The average of four numbers is : " + this.averageModel.logic;
  }
}
