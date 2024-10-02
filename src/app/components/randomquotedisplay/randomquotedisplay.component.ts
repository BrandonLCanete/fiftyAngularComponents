import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {

    quotes: string[] = [
      "“Life is like riding a bicycle. To keep your balance, you must keep moving.” —Albert Einstein",
      "Believe you can and you're halfway there. — THEODORE ROOSEVELT",
      "“If you have to put someone on a pedestal, put teachers. They are society's heroes.” – Guy Kawasaki",
      "You'll join the high fliers who soar to high heights.” — Dr. Seuss",
      "“If I know what love is, it is because of you.” – Hermann Hesse",
      "“There are no limits. There are only plateaus, and you must not stay there — you must go beyond them.” – Bruce Lee",
      "“The future belongs to those who believe in the beauty of their dreams.” ―Eleanor Roosevelt",
      "“Life is like a coin. You can spend it any way you wish, but you only spend it once.” -Lillian Dickson",
      "“My mother is a walking miracle.” —Leonardo DiCaprio",
      "“It is a wise father that knows his own child.” —William Shakespeare",
      "“There’s no path to happiness. Happiness is the path.” – Buddha",
    ];
    result: string = "";

    Random(){
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.result = this.quotes[randomIndex];
    }
}
