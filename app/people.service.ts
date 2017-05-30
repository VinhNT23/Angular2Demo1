/**
 * Created by davidvinhit on 5/30/2017.
 */
import {Person} from './person';

export class PeopleService {
  getAll(): Person[] {
    return [
      {name: 'Vinh', height: 170, weight: 50},
      {name: 'Tuan', height: 180, weight: 50},
      {name: 'Tung', height: 180, weight: 50}
    ]
  }
}
