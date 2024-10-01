import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
    words: string = "";
    result: string = "";

    Shuffle(words : string){
       const chars = words.split('');
       for(let count = chars.length - 1;count > 1;count--){
          const random = Math.floor(Math.random() * (count + 1));
          [chars[count], chars[random]] = [chars[random], chars[count]];
       }
       this.result = "Shuffled words are : " + chars.join('');
    }
}
