import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
    char: string = "";
    count: number = 0;
    result: string = "";

    Count(){
       for(this.count = 0 ; this.count <= this.char.length; this.count++){
           this.result = "The Character count is : " + this.count;
       }
    }
}
