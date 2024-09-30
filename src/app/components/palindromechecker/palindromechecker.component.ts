import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
    word: string = "";
    result: string = "";
    checkword: string = "";
    reverseword: string = "";

    check(){
      this.checkword = this.word.toLowerCase().replace(/[^a-z]/g,'');
      this.reverseword = this.checkword.split('').reverse().join('');

      if(this.word !== ""){
        if(this.checkword === this.reverseword){
          this.result = "The word is a palindrome";
        }else{
          this.result = "The word is not a palindrome";
        }
      }
    }
}
