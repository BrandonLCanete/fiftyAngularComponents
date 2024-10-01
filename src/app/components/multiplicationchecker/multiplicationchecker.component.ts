import { Component, OnInit } from '@angular/core';
import { MultiplicationChecker } from './multiplicationchecker.model';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent implements OnInit{

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    multiplicationModel: MultiplicationChecker = {numOne: 0, numTwo: 0};

    Check(){
       if(this.multiplicationModel.numOne % this.multiplicationModel.numTwo === 0){
           this.multiplicationModel.result = this.multiplicationModel.numOne + " is multiple of " + this.multiplicationModel.numTwo;
       }else{
           this.multiplicationModel.result = this.multiplicationModel.numOne +  " is not multiple of " + this.multiplicationModel.numTwo;
       }
    }
}
