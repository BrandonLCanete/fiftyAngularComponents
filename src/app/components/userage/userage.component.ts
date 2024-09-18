import { Component, OnInit } from '@angular/core';
import { UserageModel } from './userage.model';


@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  userageModel : UserageModel = {birthyear: 0,calculate: 0};
  
  year_now: number = 2024;
  
  onSubmit(){
    this.userageModel.calculate = this.year_now - this.userageModel.birthyear;
    this.userageModel.print_age = "Your age is " + this.userageModel.calculate;
  }
}
