import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <people-list>
    `
})
export class AppComponent {
  title: string = 'Welcome to angular 2';
}
