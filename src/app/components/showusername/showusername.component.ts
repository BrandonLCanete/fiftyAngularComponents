import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
    username: string = "";
    result: string = "";

    Show(){
       if(this.username !== ""){
          this.result = "The username is: " + this.username;
       }
    }

}
