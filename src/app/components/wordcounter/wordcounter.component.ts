import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
    word: string = "";
    result: string = "";

    Counter(word : string){
       const word_Length = word.trim().split(/\s+/);
       this.result = "Word Count : " + word_Length.length;
    }
}
