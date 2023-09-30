import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  repos:any;
  constructor(public http: HttpClient) { }
  public getData() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
             .subscribe(data => {
                 this.repos= data;
                 console.log(this.repos)
             },
             error => {
             }
    );
    return this.repos;
  }
  
}
