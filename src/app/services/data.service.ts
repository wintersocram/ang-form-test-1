import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Q from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private baseUrl: string, private http: HttpClient) { }

  create(pathUrl: string, data: any) {
    let url: string = `${ this.baseUrl }${ pathUrl }`;
    return this.http.post(url, data);
  }
  // getAll(url: string) {
  //   return this.http.get(url);
  // }
  // getById(url: string, id: string) {
  //   return this.http.get(url + '/' + id);
  // }
  // update(url: string, item: any) {
  //   return Q;
  // }

}
