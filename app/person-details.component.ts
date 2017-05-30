/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Component, Input} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'person-detail',
  template: `
  <section *ngIf="person">
    <p>Your selected:{{person.name}}</p>
    <p>Description:</p>
    <p>{{person.name}} Height: {{person.height}} Weight: {{person.weight}}</p>
  </section>
  `
})

export class PersonDetailsComponent {
  @Input() person:Person;
}
