import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {

  text: string = "";
  printLength: number = 0;

  onClick(){
    this.printLength = this.text.length;
  }

}
