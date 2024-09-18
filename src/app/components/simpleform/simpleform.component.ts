import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
    name: string = "";
    level: string = "";
    address: string ="";
    printAll: string = "";
    onSubmit(){
       if(this.name !== "" && this.level !== "" && this.address !== ""){
        this.printAll = "Hello I'm " + this.name + " and I'm " + this.level + " year level " + " and I live in "+ this.address;
       }
    }
}
