import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goodbye',
  template: '<p>Good Bye, {{myName}}!</p>'
})
export class GoodbyeComponent {

  @Input()
  myName: string;
}
