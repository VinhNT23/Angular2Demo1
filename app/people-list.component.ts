/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Component} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'people-list',
  template: `
  <ul>
    <li *ngFor="let person of people">{{person.name}}</li>
  </ul>
  `
})

export class PeopleListComponent {
  people: Person[] = [
    {name: 'Vinh', height: 170, weight: 50},
    {name: 'Tuan', height: 180, weight: 50}
  ]
}
