import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

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

  registerUsers(obj){
    let baseUrl: string = "http://localhost:4000/book";
    return this.http.post(baseUrl,obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    });
}

  createUser(user: any) {
    this.registerUsers({data: 'asdasd'}).subscribe((reponse)=>{
      console.log(reponse);
     }); 

    // this.http.post(
    //   'http://localhost:4000/book', 
    //   {
    //     obj: 'obj'
    //   },
    //   {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     })
    //   }
    // )
    //   .subscribe();

    // console.debug(`[${ this.BASE_COMPONENT }.createUser()] user: %o`, user);
    // let pathUrl: string = '/create-new';
    // let url: string = `${ this._baseUrl }${ pathUrl }`;
    // // this.http.post(url, user)
    // // // this.service.create(pathUrl, user)
    // //   .subscribe(res => {
    // //     console.debug(`[${ this.BASE_COMPONENT }.createUser()] res: %o`, res);
    // //   });
    // this.http.post('http://localhost:4000/book', {}, httpOptions)
    //   .subscribe(res => {
    //     console.log('POST res: %o', res);
    //   });
  }

  getUser() {
    let baseUrl: string = "http://localhost:4000/book";
    this.http.get(baseUrl)
    // this.http.get('http://localhost:4000/book')
      .subscribe(res => {
        console.log('GET res: %o', res);
      });
  }

  // getAllUsers() {
  //   let url: string = 'http://jsonplaceholder.typicode.com/posts';
  //   this.service.getAll(url)
  //     .subscribe(res => {
  //       console.debug(`[${ this.BASE_COMPONENT }.getAllUsers()] res: %o`, res);
  //     })
  // }
}
