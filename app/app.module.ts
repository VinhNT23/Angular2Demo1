import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PeopleListComponent} from './people-list.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PeopleListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
