import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {

  uppercase: string = "";
  result: string = "";

  Uppercase(){
    this.result = this.uppercase.toUpperCase();
  }

}
