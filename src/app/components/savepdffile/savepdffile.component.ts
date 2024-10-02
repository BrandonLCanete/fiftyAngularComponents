import { Component } from '@angular/core';
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf';

@Component({
  selector: 'app-savepdffile',
  templateUrl: './savepdffile.component.html',
  styleUrl: './savepdffile.component.css'
})
export class SavepdffileComponent {
  
  text: string = "";
  result: string = "";

  saveFile() {
    const doc = new jsPDF();
    doc.text(this.text, 10, 10);
    const pdfBlob = doc.output('blob'); 
    saveAs(pdfBlob, 'file.pdf'); 
    this.result = "Your file is save as file.pdf";
  }
}
