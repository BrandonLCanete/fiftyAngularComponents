import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorgenerator',
  templateUrl: './randomcolorgenerator.component.html',
  styleUrl: './randomcolorgenerator.component.css'
})
export class RandomcolorgeneratorComponent {

  letters: string = "0123456789ABCDEF";
  color: string = "#";

  getRandomColor(){
    this.color = '#';
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}
