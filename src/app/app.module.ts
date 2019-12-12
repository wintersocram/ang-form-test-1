import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import { TestConnectionComponent } from './test-connection/test-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    TestConnectionComponent
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
