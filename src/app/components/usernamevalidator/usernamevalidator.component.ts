import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
    username: string = "";
    result: string = "";

    Validate(){
      const pattern = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
      
      if(this.username.match(pattern)){
        this.result = "The username is validate";
      }else{
        this.result = "Invalid username. It must be at least 6 characters long, alphanumeric, and start with a letter.";
      }
    }
}
