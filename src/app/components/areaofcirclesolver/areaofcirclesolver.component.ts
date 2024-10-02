import { Component } from '@angular/core';

@Component({
  selector: 'app-areaofcirclesolver',
  templateUrl: './areaofcirclesolver.component.html',
  styleUrl: './areaofcirclesolver.component.css'
})
export class AreaofcirclesolverComponent {
    radius: number = 0;
    result: string = "";

    Calculate(){
      const area = 3.1416 * (this.radius * this.radius);
      this.result = "The area of circle is : " + area;
    }
}
