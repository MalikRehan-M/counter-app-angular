import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  counterValue: number = 0; // Initialize the counter value

  // Method to increment the counter value
  incrementCounter() {
    this.counterValue++;
  }

  // Method to decrement the counter value
  decrementCounter() {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }

  // Method to reset the counter value to 0
  resetCounter() {
    this.counterValue = 0;
  }
}
