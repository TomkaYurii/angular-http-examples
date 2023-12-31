import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css']
})
export class Example01Component implements OnInit {

  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getRepos()
  }


  public getRepos() {

    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repos = response;
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }
}


export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
