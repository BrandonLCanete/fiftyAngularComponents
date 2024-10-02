import { Component } from '@angular/core';

@Component({
  selector: 'app-beattheboss',
  templateUrl: './beattheboss.component.html',
  styleUrl: './beattheboss.component.css'
})
export class BeatthebossComponent {
  
    bossHealth: number = 1000;
    playerHealth: number = 500;
    boss_Choice: number = 0;
    choice: number = 0;
    isClicked = false;
    isbutton = false;
    turn: number = 0;
    message: string = "";


   Turn(){
      this.isClicked = false;
      this.turn = Math.floor(Math.random()*2);
      if(this.turn === 1){
        this.message = "Your Turn";
      }else{
        this.boss_Choice = Math.floor(Math.random()*3);
        this.BossAttack(this.boss_Choice);
      }

      if(this.playerHealth < 0 || this.bossHealth < 0){
        this.GameOver();
     }
   }
   Attack(){
      this.isClicked = true;
      if(this.choice === 1){
         this.bossHealth = this.bossHealth - 60;
         this.message = "The player use 1000 Sword attack it deals 60 damage to The Boss. Now click the turn button again so The Boss will have a chance to attack";
      }else if(this.choice === 2){
        this.bossHealth = this.bossHealth - 90;
        this.message = "The player use Sword Smash attack it deals 90 damage to The Boss. Now click the turn button again so The Boss will have a chance to attack";
      }else if(this.choice === 3){
        this.playerHealth = this.playerHealth + 100;
        this.message = "The player use Heal it heals 100 health. Now click the turn button again so The Boss will have a chance to attack";
      }

      if(this.playerHealth < 0 || this.bossHealth < 0){
         this.GameOver();
         this.isClicked = true;
      }
   }

   BossAttack(boss_Choice : number){
    if(boss_Choice === 1){
      this.playerHealth = this.playerHealth - 50;
      this.message = "The Boss use Rapid Punching it deals 50 damage to you. Now click the turn button to have a chance to attack The Boss again";
    }else if(boss_Choice === 2){
      this.playerHealth = this.playerHealth - 70;
      this.message = "The Boss use Shadow Bomb it deals 70 damage to you. Now click the turn button to have a chance to attack The Boss again";
    }else{
      this.bossHealth = this.bossHealth + 50;
      this.message = "The Boss use Heal it heals 50 health. Now click the turn button to have a chance to attack The Boss again";
    }
   }
   GameOver(){
      if(this.playerHealth < 0){
         this.message = "Game Over";
         this.isbutton = true;
      }else{
        this.message = "Congratulations, You Win!";
        this.isbutton = true;
      }
   }
   Reset(){
     window.location.reload();
   }
}
