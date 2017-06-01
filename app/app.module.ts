import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PeopleListComponent} from './people-list.component';
import {PersonDetailsComponent} from './person-details.component';
import { AppComponent }  from './app.component';
import {PeopleService} from './people.service';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

@NgModule({
  imports: [BrowserModule, routing, HttpModule],
  declarations: [AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule {
}
