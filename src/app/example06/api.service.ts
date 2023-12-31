import { Injectable } from '@angular/core';
import {repos} from "./repos";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseURL= "https://api.github.com/";

  constructor(private httpClient: HttpClient){
  }

  getRepos(userName: string, PageNo: string, SortOn: string): Observable<repos[]> {
    const params = new HttpParams()
        .set('page', PageNo)
        .set('sort', SortOn);

    return this.httpClient.get<repos[]>(this.baseURL + 'users/' + userName + '/repos', {params});
  }
}
