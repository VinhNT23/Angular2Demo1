/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Injectable} from '@angular/core';
import {Person} from './person';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

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

  getAll(): Observable<Person[]> {

    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapPersons);
    // .catch(function(err){ console.error(err); return err; });

    return people$;
  }

  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson)
      .catch(handleError);

    return person$;
  }

  save(person: Person): Observable<Response> {
    return this.http
      .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
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

function mapPersons(response: Response): Person[] {

  return response.json().results.map(toPerson);
}

function mapPerson(response: Response): Person {
  return toPerson(response.json());
}

function toPerson(r: any): Person {

  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  //console.log('Parsed person:', person);
  return person;
}
function extractId(personData: any) {
  let extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
  return parseInt(extractedId);
}

function handleError(error : any){
  let errorMsg = (error && error.message) || 'Other message';
  return Observable.throw(errorMsg);
}


