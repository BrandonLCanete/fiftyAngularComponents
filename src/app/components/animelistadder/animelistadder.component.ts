import { Component } from '@angular/core';

@Component({
  selector: 'app-animelistadder',
  templateUrl: './animelistadder.component.html',
  styleUrl: './animelistadder.component.css'
})
export class AnimelistadderComponent {
  animeList: string[] = ["That time i got reincarnated as a slime","Dragon Ball Z","Your Name.","Your Lie in April","Silent Voice","5 centimeters per second"];  
  anime: string = "";

  addAnime(){
    this.animeList.push(this.anime);
  }
  Remove(index: number){
    this.animeList.splice(index, 1)
  }
}
