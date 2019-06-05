import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<p>Hello, {{myName}}!</p>',
  inputs: ['myName']

})
export class HelloComponent {
  myName: string;

}
