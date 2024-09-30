import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
    degree: number = 0;
    conversion: string = "";
    logic: number = 0;
    result: string = "";

    Convert(){
      if(this.degree !== null){
          switch(this.conversion){
             case "celsius":
                this.logic = (this.degree * 9/5) + 32;
                this.result = "°F " + this.logic;
              break;
             case "fahrenheit":
                this.logic = (this.degree - 32) * 5/9;
                this.result = "°C " + this.logic;
              break;
          }
      }
    }
}
