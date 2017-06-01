/**
 * Created by davidvinhit on 5/30/2017.
 */
import { Injectable } from '@angular/core';
import {Person} from './person';

const PEOPLE: Person[] = [
  {id: 1, name: 'Vinh', height: 170, weight: 50},
  {id: 2, name: 'Tuan', height: 180, weight: 50},
  {id: 3, name: 'Tung', height: 180, weight: 50}
];

@Injectable()
export class PeopleService {
  id;
  getAll(): Person[] {
    return PEOPLE;
  }

  get(id: number): Person {
    return PEOPLE.find(p => p.id === id);
  }

}
