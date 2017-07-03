/**
 * Created by davidvinhit on 6/28/2017.
 */
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

// Services
import { PeopleService } from '../people.service';

// Components
import { DataTableDirective } from '../shared/modules/datatables/angular-datatables/angular-datatables.directive';

// Models
import { DataTableOptions } from '../shared/models/datatableOptions.model';

@Component({
  selector: 'person-list',
  templateUrl: './app/+person/person.template.html',
  styleUrls: [],
  providers: [
    PeopleService
  ]
})

export class PersonComponent implements OnInit, AfterViewInit {
  public dtOptions: any = {};
  public dtInstance: any = {};

  @ViewChild(DataTableDirective)
  public datatableEl: DataTableDirective;

  constructor(private _peopleService: PeopleService) {
    // empty
  }

  public ngOnInit(): void {
    this.dtOptions = new DataTableOptions(
      [
        {
          title: 'Id', data: 'id'
        },
        {
          title: 'Name', data: 'name'
        },
        {
          title: 'Height', data: 'height', name: 'height',
        },
        {
          title: 'Weight', data: 'weight'
        }
      ],
      {
        ajax: this.serverData.bind(this),
        dom: 't',
        ordering: false,
      });
  }

  public ngAfterViewInit(): void {
    // get instance of datatables
    this.datatableEl.dtInstance.then((dtInstance) => {
      this.dtInstance = dtInstance;
    });
  }

  private serverData(aoData: any, fnCallback: any, oSettings: any): void {
    let self = this;

    // Then just call your service to get the records from server side
    self._peopleService.getAll()
      .subscribe((res: any): void => {
      console.log('list: '+res)
        fnCallback({
          data: res
        });
      });
  }

}
