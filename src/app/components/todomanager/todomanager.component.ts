import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
    managerList: string[] = [];
    manager: string = "";

    Add(){
      this.managerList.push(this.manager);
    }
    Remove(index : number){
      this.managerList.splice(index, 1);
    }
}
