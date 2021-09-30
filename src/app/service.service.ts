import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    
    const url="https://audiobreeze2.herokuapp.com/audio"

    return this.http.get<any>(url)

  }

  getUser():Observable<any>{
    const url ="https://audiobreeze2.herokuapp.com/user"
    return this.http.get<any>(url)
  }
  postUser():Observable<any>{
    const url ="https://audiobreeze2.herokuapp.com/user"
    return this.http.get<any>(url)
  }
}
