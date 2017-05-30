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
    <a href="#" (click)="SelectPerson(person)">
    {{person.name}}
    </a>
    </li>
  </ul>
  <person-detail [person]="selectedPerson"></person-detail>
  `
})

export class PeopleListComponent {
  people:Person[] = [];
  selectedPerson:Person;

  constructor(private _peopleService:PeopleService) {
    this.people = this._peopleService.getAll();
  }

  SelectPerson(person:Person) {
    this.selectedPerson = person;
  }
}
