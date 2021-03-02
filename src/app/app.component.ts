import { Component } from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  listBackgroundChoose = [];
  private intervalId = 0;
  message = '';
  count = 5;
  remainingTime = this.count;
  backgroundShow = '';
  backgroundChoose = '#000000';

  constructor() {
  }
  onChange(): void {
    this.listBackgroundChoose.push(this.backgroundChoose);
    if (this.backgroundShow === '') this.backgroundShow = this.listBackgroundChoose[0];
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }


  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.count;
    }
  }
  reset() {
    this.clearTimer();
    this.remainingTime = this.count;
    this.message = `Click start button to start the Countdown`;
  }
  index = 0;
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.remainingTime = this.count;
        if (this.index === this.listBackgroundChoose.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        this.backgroundShow = this.listBackgroundChoose[this.index];

      }
    }, 1000);
  }
}
