import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>

    <p>
      <ng-content></ng-content>
      Count: {{ count }} -
      <button (click)="increment()">+1</button>
    </p>

  </div>
`
})
export class CounterComponent implements OnInit {
  @Input() count: number;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
  ngOnInit() {
  }

}
