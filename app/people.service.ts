/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Injectable} from '@angular/core';
import {Person} from './person';

const PEOPLE: Person[] = [
  {id: 1, name: 'Vinh', height: 170, weight: 50},
  {id: 2, name: 'Tuan', height: 180, weight: 50},
  {id: 3, name: 'Tung', height: 180, weight: 50}
];

@Injectable()
export class PeopleService {
  getAll(): Person[] {
    return PEOPLE.map(x => this.clone(x));
  }

  get(id: number): Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }

  save(person: Person) {
    let personOriginal = PEOPLE.find(x => x.id == person.id);
    if (personOriginal)
      Object.assign(personOriginal, person);
  }

  private clone(object: any) {
    return JSON.parse(JSON.stringify(object));
  }
}
