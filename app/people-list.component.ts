/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Component} from '@angular/core';
import {Person} from './person';
import {PeopleService} from './people.service';

@Component({
  selector: 'people-list',
  template: `
  <ul>
    <li *ngFor="let person of people">
    <a href="#" [routerLink]="['/persons',person.id]">
    {{person.name}}
    </a>
    </li>
  </ul>
  `
})

export class PeopleListComponent {
  people:Person[] = [];

  constructor(private _peopleService:PeopleService) {
    this.people = this._peopleService.getAll();
  }
}
