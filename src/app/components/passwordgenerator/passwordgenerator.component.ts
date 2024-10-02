import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordgenerator',
  templateUrl: './passwordgenerator.component.html',
  styleUrl: './passwordgenerator.component.css'
})
export class PasswordgeneratorComponent {
    result: string = "";

    Generate(){

      let password = "";
      let strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*Z()-+`';

      for (let i = 0; i <= 10; i++) {
            let char = Math.floor(Math.random()* strings.length + 1);
            password += strings.charAt(char)
        }

        this.result =  password;

    }

}
