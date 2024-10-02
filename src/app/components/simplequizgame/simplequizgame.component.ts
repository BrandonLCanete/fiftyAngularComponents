import { Component } from '@angular/core';

@Component({
  selector: 'app-simplequizgame',
  templateUrl: './simplequizgame.component.html',
  styleUrl: './simplequizgame.component.css'
})
export class SimplequizgameComponent {

    question: string[] = [
       "What is the capital of Philippines?",
       "What is the name of our Galaxy?",
       "Who is the father of Gravity?",
    ]

    answer: string[] = [
       "Manila",
       "Milky Way","Milky Way Galaxy",
       "Sir. Isaac Newton","Isaac Newton","Sir Isaac Newton",
    ]

    question_result: string = "";
    question_answer: string = "";
    remarks: string = "";


    Generate(){
        const random = Math.floor(Math.random() * this.question.length);
        this.question_result = this.question[random];
    }
    Answer(){
      if(this.question_result === this.question[0] && this.question_answer === this.answer[0].toUpperCase() || this.question_answer === this.answer[0].toLowerCase() || this.question_answer === this.answer[0]){
        this.remarks = "Correct";
      }else if(this.question_result === this.question[1] && this.question_answer === this.answer[1].toUpperCase() || this.question_answer === this.answer[1].toLowerCase() || this.question_answer === this.answer[1] ||  this.question_answer === this.answer[2].toUpperCase() ||  this.question_answer === this.answer[2].toLowerCase() || this.question_answer === this.answer[2]){
        this.remarks = "Correct";
      }else if(this.question_result === this.question[2] && this.question_answer === this.answer[3].toUpperCase() || this.question_answer === this.answer[3].toLowerCase() || this.question_answer === this.answer[3] ||  this.question_answer === this.answer[4].toUpperCase() ||  this.question_answer === this.answer[4].toLowerCase() || this.question_answer === this.answer[4] ||  this.question_answer === this.answer[5].toUpperCase() ||  this.question_answer === this.answer[5].toLowerCase() || this.question_answer === this.answer[5]){
        this.remarks = "Correct";
      }
      else{
        this.remarks = "Wrong";
      }
    }
}
