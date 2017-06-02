/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Component, OnInit} from '@angular/core';
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
    <section *ngIf="errorMessage">
      {{errorMessage}}
    </section>
  `
})

export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  errorMessage: string = '';

  constructor(private _peopleService: PeopleService) {

  }

  ngOnInit() {
    this._peopleService.getAll().subscribe(
      p => this.people = p,
      e=>this.errorMessage = e
    );

  }
}
