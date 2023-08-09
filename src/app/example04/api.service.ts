import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "./person";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Person[]> {
    console.log('getPeople ' + this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }

  addPerson(person: Person): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body, {'headers': headers})
  }


  /*
  post(url: string,
    body: any,
    options: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: "body|events|response|";
    params?: HttpParams | { [param: string]: string | string[]; };
    reportProgress?: boolean;
    responseType: "arraybuffer|json|blob|text";
    withCredentials?: boolean;
  }
  ): Observable

  headers : use this to send the HTTP Headers along with the request
  params: set query strings / URL parameters
  observe: This option determines the return type.
    responseType: The value of responseType determines how the response is parsed.
    reportProgress: Whether this request should be made in a way that exposes progress events.
    withCredentials: Whether this request should be sent with outgoing credentials (cookies).

  */

}
