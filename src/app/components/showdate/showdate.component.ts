import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
    datetime = new Date();
    result: string = "";
    Show(){
      this.result = "The Date is: " + this.datetime.toLocaleDateString() + " | " + "The Time is: "+ this.datetime.toLocaleTimeString();
    }
}
