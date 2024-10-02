import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
    name: string = "";
    result: string = "";

    Convert(){
      this.result = "Hello " + this.name.toUpperCase();
    }
}
