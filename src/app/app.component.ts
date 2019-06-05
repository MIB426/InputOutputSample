import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  number1: number = 10;
  number2: number = 20;
  number3: number = 30;
  constructor() {
    this.name = 'World';
  }

  onCountChanged(value: number) {
    this.number3 = value;
  }
}

