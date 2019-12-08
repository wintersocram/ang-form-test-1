import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUsersTest1Component } from './add-users-test1/add-users-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersTest1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
