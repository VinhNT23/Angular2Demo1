/**
 * Created by davidvinhit on 5/30/2017.
 */
import {OnInit, Component , OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PeopleService} from './people.service';
import {Person} from './person';

@Component({
  selector: 'person-detail',
  template: `
  <section *ngIf="person">
    <p>Your selected:{{person.name}}</p>
    <p>Description:</p>
    <p>{{person.name}} Height: {{person.height}} Weight: {{person.weight}}</p>
  </section>
   <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `
})

export class PersonDetailsComponent implements OnInit,OnDestroy {
  person: Person;
  sub: any;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=> {
        let id = Number.parseInt(params['id']);
        this.person = this.peopleService.get(id);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList() {
    let link = ["/persons"];
    this.router.navigate(link);
  }
}
