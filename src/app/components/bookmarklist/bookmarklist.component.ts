import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
    link: string = "";
    result: string = "";

    Link(){
       if(this.link.startsWith('https://')){
         this.result = this.link;
       }else{
         this.result = "";
       }
    }
}
