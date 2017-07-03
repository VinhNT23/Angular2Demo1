/**
 * Created by davidvinhit on 6/13/2017.
 */
import { Directive, ElementRef, Inject, OnInit, Input, Component } from '@angular/core';
import 'jquery';
import 'datatables.net';
declare var $: any;

@Directive({
  selector: '[datatable]'
})

export class DataTableDirective implements OnInit {
  /**
   * The DataTable option you pass to configure your table.
   */
  @Input()
  public dtOptions: any;

  /**
   * The DataTable instance built by the jQuery library [DataTables](datatables.net).
   *
   * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
   * this variable.
   */
  public dtInstance: Promise<any>;

  constructor(@Inject(ElementRef) private el: ElementRef) {
    this.dtOptions = {};
  }

  public ngOnInit() {
    this.dtInstance = new Promise((resolve, reject) => {
      Promise.resolve(this.dtOptions).then((dtOptions) => {
        const dt = $(this.el.nativeElement).DataTable(dtOptions);
        resolve(dt);
      });
    });
  }
}
