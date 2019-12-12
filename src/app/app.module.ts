import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { MainUsersComponent } from './main-users/main-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
  { 
    path: 'users/new-user', 
    component: AddUserComponent, 
    data: { title: 'Add new user' } 
  },
  { 
    path: 'users/users-list/', 
    component: UsersListComponent, 
    data: { title: 'Users List' } 
  },
  { 
    path: 'users/user-detail/:id', 
    component: UserDetailComponent, 
    data: { title: 'User' } 
  },
  { 
    path: 'users', 
    component: MainUsersComponent, 
    data: { title: 'Users' } 
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Users Form' }, 
    pathMatch: 'full' 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    MainUsersComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    UsersListComponent,
    NavBarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
