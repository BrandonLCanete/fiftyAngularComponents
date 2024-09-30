import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
    fahrenheit: number = 0;
    result: number = 0;

    Convert(){
      this.result = (this.fahrenheit - 32) * 5/9;
    }
}
