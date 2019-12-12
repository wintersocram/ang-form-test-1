import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent implements OnInit{
  private _baseUrl: string = 'http://localhost:4000';

  customBaseUrl: string;
  customData: string;
  customMethod: string;
  customResult: object;
  customResultStatus: string;
  getBaseUrl: string;
  getResult: object;
  getResultStatus: string;
  postBaseUrl: string;
  postData: string;
  postResult: object;
  postResultStatus: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.reset();
  }


  reset() {
    this.baseUrl = 'http://localhost:4000/database-api';
    this.customBaseUrl = '';
    this.customData = '';
    this.customResult = {};
    this.customResultStatus = 'undefined';
    this.getBaseUrl = '/api/get-all';
    this.getResult = {};
    this.getResultStatus = 'undefined';
    this.postBaseUrl = '/api/users/add-user';
    this.postData = `{
      "firstname": "user firstname", 
      "lastname": "user lastname", 
      "username": "user username"
    }`;
    this.postResult = {};
    this.postResultStatus = 'undefined';
  }
  
  testCustom() {
    this.customResultStatus = 'error';
    this.customResult = {'result': 'not ready'};
  }
  
  testGet() {
    this.get(this._baseUrl + this.getBaseUrl)
      .subscribe(
        res => {
          let _result = Object.assign({}, { status: 'success'}, res);
          this.getResult = _result;
          this.getResultStatus = "success";
          console.log('[testGet - success] res: %o', res);
        }, 
        err => {
          let _result = { status: err.status, name : err.name, message: err.message };
          this.getResult = _result;
          this.getResultStatus = "error";
          console.warn('[testGet - error] error: %o', _result);
        }
      );
  }
  
  testPost() {
    this.post(this._baseUrl + this.postBaseUrl, this.postData)
      .subscribe(
        res => {
          let _result = Object.assign({}, { status: 'success'}, res);
          this.postResult = _result;
          this.postResultStatus = "success";
          console.log('[testPost - success] res: %o', res);
        }, 
        err => {
          let _result = { status: err.status, name : err.name, message: err.statusText };
          this.postResult = _result;
          this.postResultStatus = "error";
          console.warn('[testPost - error] error: %o', _result);
        }
      );
}


  /* base methods GET and POST */
  get(baseUrl) {
    return this.http.get(baseUrl);
  }
  post(baseUrl, obj) {
    return this.http.post(baseUrl, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /* GETTERs and SETTERs */
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(value: string) {
    this._baseUrl = value;;
  }
}
