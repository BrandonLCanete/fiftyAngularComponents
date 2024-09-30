import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
    email: string = "";
    password: string = "";
    result: string = "";

    Login(){
       if(this.email!==null  &&  this.password!==null){
           this.result = "Sucessfully Login!";
       }
    }
}
