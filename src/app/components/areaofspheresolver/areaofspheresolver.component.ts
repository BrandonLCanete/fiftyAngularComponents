import { Component } from '@angular/core';

@Component({
  selector: 'app-areaofspheresolver',
  templateUrl: './areaofspheresolver.component.html',
  styleUrl: './areaofspheresolver.component.css'
})
export class AreaofspheresolverComponent {
    radius: number = 0;
    result: string = "";

    Calculate(){
      const area = 4 * 3.1416 * this.radius * this.radius;
      this.result = "The area of sphere is : " + area;
    }
} 
