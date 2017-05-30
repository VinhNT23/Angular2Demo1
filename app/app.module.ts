import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PeopleListComponent} from './people-list.component';
import { AppComponent }  from './app.component';
import {PeopleService} from './people.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PeopleListComponent],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule {
}
