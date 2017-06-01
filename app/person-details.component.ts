/**
 * Created by davidvinhit on 5/30/2017.
 */
import {OnInit, Component , OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PeopleService} from './people.service';
import {Person} from './person';
import {routing} from "./app.routes";

@Component({
  selector: 'person-detail',
  templateUrl:'app/person-details.component.html'
})

export class PersonDetailsComponent implements OnInit,OnDestroy {
  person: Person;
  sub: any;
  professions:string[]=['test1','test2','test3','test4'];

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

  savePersonDetails(){
    this.peopleService.save(this.person);
    this.gotoPeoplesList();
  }
}
