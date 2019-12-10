import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as localData from '../local-data/data.json';
import * as localUsers from '../local-data/users.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private BASE_COMPONENT: string = 'UsersService';
  private _baseUrl: string = 'http://localhost:4000/database-api/api/users';
  private _users: any[] = (localUsers as any).default;

  constructor(private http: HttpClient) {}
  // constructor(private service: DataService, private http: HttpClient) {
  //   let baseUrl: string = 'http://localhost:4000/database-api/api/users/';
  //   this.service = new DataService(baseUrl, this.http);
  //   // super('http://localhost:4000/database-api/api/users/', http);
  // }

  // getUser(userId: number) {
  //   let url: string = 'http://jsonplaceholder.typicode.com/posts';
  //   this.service.getAll(url)
  //     .subscribe(res => {
  //       console.debug(`[${ this.BASE_COMPONENT }.getAllUsers()] res: %o`, res);
  //     })
  // }

  registerUsers(obj) {
    // let baseUrl: string = "http://localhost:4000/book";
    // return this.http.post(baseUrl,obj, {
    //   headers: new HttpHeaders({
    //        'Content-Type':  'application/json',
    //      })
    // });
  }

  createUser(user: any) {
    // this.registerUsers({data: 'asdasd'}).subscribe((reponse)=>{
    //   console.log(reponse);
    //  }); 
  }
  createLocalUser(user: any) {

  }

  set users(users: any[]) {
    if (!users && users.length > 0)
      this._users = users;
  }

  insertUser(user: object) {
    if (Object.keys(user).length > 0) {
      let newUser: object = Object.assign({}, user);

      // define id
      let id: number = 0;
      for (let i=0 ; i< this.users.length ; i++) {
        id = this.users[i].id > id ? this.users[i].id : id;
      }
      // update user id
      newUser['id'] = id + 1;

      // insert user
      this._users.push(newUser);
    }
    else
      console.warn('user is empty: %o', user);
  }

  get users() {
    return this._users;
  }

  getUser(id: number) {
    for (let i = 0 ; i < this.users.length; i++) {
      let element = this.users[i];
      if (element.id == id)
        return element;
    }

    return null;
  }

  // getUser() {
  //   let baseUrl: string = "http://localhost:4000/book";
  //   this.http.get(baseUrl)
  //   // this.http.get('http://localhost:4000/book')
  //     .subscribe(res => {
  //       console.log('GET res: %o', res);
  //     });
  // }

  getLocalSampleData() {
    return localData;
  }

}
