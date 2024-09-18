import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {

  name: string = "";
  printGreeting: string = "";

  onSubmit(){
    if(this.name !== ""){
      if(this.name.charAt(0) === "A" || this.name.charAt(0) === "a"){
        this.printGreeting = "Hello " + this.name;
      }else if(this.name.charAt(0) === "B" || this.name.charAt(0) === "b"){
        this.printGreeting = "Welcome " + this.name;
      }else if(this.name.charAt(0) === "C" || this.name.charAt(0) === "c"){
        this.printGreeting = "How are you? " + this.name;
      }else if(this.name.charAt(0) === "D" || this.name.charAt(0) === "d"){
        this.printGreeting = "Good Evening " + this.name;
      }else if(this.name.charAt(0) === "E" || this.name.charAt(0) === "e"){
        this.printGreeting = "Hey " + this.name;
      }else if(this.name.charAt(0) === "F" || this.name.charAt(0) === "f"){
        this.printGreeting = "Greetings " + this.name;
      }else if(this.name.charAt(0) === "G" || this.name.charAt(0) === "g"){
        this.printGreeting = "So Nice to Meet You " + this.name;
      }else if(this.name.charAt(0) === "H" || this.name.charAt(0) === "h"){
        this.printGreeting = "Hi " + this.name;
      }else if(this.name.charAt(0) === "I" || this.name.charAt(0) === "i"){
        this.printGreeting = "Yo " + this.name;
      }else if(this.name.charAt(0) === "J" || this.name.charAt(0) === "j"){
        this.printGreeting = "Howdy " + this.name;
      }else if(this.name.charAt(0) === "K" || this.name.charAt(0) === "k"){
        this.printGreeting = "Hey There " + this.name;
      }else if(this.name.charAt(0) === "L" || this.name.charAt(0) === "l"){
        this.printGreeting = "Good Day " + this.name;
      }else if(this.name.charAt(0) === "M" || this.name.charAt(0) === "m"){
        this.printGreeting = "Good Afternoon " + this.name;
      }else if(this.name.charAt(0) === "N" || this.name.charAt(0) === "n"){
        this.printGreeting = "Good Morning " + this.name;
      }else if(this.name.charAt(0) === "O" || this.name.charAt(0) === "o"){
        this.printGreeting = "How do you do " + this.name;
      }else if(this.name.charAt(0) === "P" || this.name.charAt(0) === "p"){
        this.printGreeting = "Pleased to meet you " + this.name;
      }else if(this.name.charAt(0) === "Q" || this.name.charAt(0) === "q"){
        this.printGreeting = "Dear " + this.name;
      }else if(this.name.charAt(0) === "R" || this.name.charAt(0) === "r"){
        this.printGreeting = "It's great to see you " + this.name;
      }else if(this.name.charAt(0) === "S" || this.name.charAt(0) === "s"){
        this.printGreeting = "Good To See You " + this.name;
      }else if(this.name.charAt(0) === "T" || this.name.charAt(0) === "t"){
        this.printGreeting = "Long Time No See " + this.name;
      }else if(this.name.charAt(0) === "U" || this.name.charAt(0) === "u"){
        this.printGreeting = "It's been a while " + this.name;
      }else if(this.name.charAt(0) === "V" || this.name.charAt(0) === "v"){
        this.printGreeting = "What's up " + this.name;
      }else if(this.name.charAt(0) === "W" || this.name.charAt(0) === "w"){
        this.printGreeting = "Sup " + this.name;
      }else if(this.name.charAt(0) === "X" || this.name.charAt(0) === "x"){
        this.printGreeting = "Are you okay? " + this.name;
      }else if(this.name.charAt(0) === "Y" || this.name.charAt(0) === "y"){
        this.printGreeting = "What's new " + this.name;
      }else if(this.name.charAt(0) === "Z" || this.name.charAt(0) === "z"){
        this.printGreeting = "Glad to see you " + this.name;
      }
    }
  }
}
