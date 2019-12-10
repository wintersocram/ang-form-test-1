import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUsersTest2Component } from './add-users-test2/add-users-test2.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersTest2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
