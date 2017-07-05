/**
 * Created by davidvinhit on 6/13/2017.
 */

import { NgModule } from  '@angular/core';
import { DataTableDirective, DataTablesModule } from './angular-datatables';


@NgModule({
  declarations: [DataTableDirective],
  imports: [DataTablesModule],
  exports: [DataTableDirective,],
})

export class CustomDataTablesModule {

}

