/**
 * Created by davidvinhit on 6/13/2017.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DataTableDirective } from './angular-datatables.directive';

@NgModule({
  imports: [],
  declarations: [DataTableDirective],
  exports: [DataTableDirective]
})

export class DataTablesModule {
  public static forRoot(): ModuleWithProviders {
    debugger;
    return {
      ngModule: DataTablesModule
    };
  }
}
