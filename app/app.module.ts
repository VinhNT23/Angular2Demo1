import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
import { PersonComponent } from './+person/person.component';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from './shared/modules/datatables/angular-datatables/angular-datatables.module';

import { routing } from './app.routes';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, DataTablesModule],
  declarations: [AppComponent, PeopleListComponent, PersonDetailsComponent, PersonComponent],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule {
}
