/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Injectable} from '@angular/core';
import {Person} from './person';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const PEOPLE: Person[] = [
  {id: 1, name: 'Vinh', height: 170, weight: 50},
  {id: 2, name: 'Tuan', height: 180, weight: 50},
  {id: 3, name: 'Tung', height: 180, weight: 50}
];

@Injectable()
export class PeopleService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http: Http) {

  }

  // getAll(): Observable<Person[]> {
  //   let people$=this.http
  //     .get(`${this.baseUrl}/people`,{headers:this.getHeaders()})
  //     .map(mapPersons);
  //   return people$;
  // }

  getAll():Person[]{
    return PEOPLE;
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

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


}
