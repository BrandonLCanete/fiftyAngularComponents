import { Component } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-savetextfile',
  templateUrl: './savetextfile.component.html',
  styleUrl: './savetextfile.component.css'
})
export class SavetextfileComponent {
  text: string = "";
  result: string = "";
  saveFile() {
    const blob = new Blob([this.text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "document.txt");
    this.result = "Your file is save as document.txt";
  }
}
