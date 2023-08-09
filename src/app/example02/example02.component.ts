import { Component } from '@angular/core';

import {GithubService} from './github.service';
import {repos} from './repos';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.css']
})
export class Example02Component {
  userName: string = "tektutorialshub"
  repos: repos[];

  loading: boolean = false;
  errorMessage: string;

  constructor(private githubService: GithubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                     // next() callback
          console.log('response received')
          this.repos = response;
        },
        (error) => {                        // error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                           // complete() callback
          console.error('Request completed')             // this is actually not needed
          this.loading = false;
        })
  }
}
