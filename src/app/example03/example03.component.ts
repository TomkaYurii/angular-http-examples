import { Component } from '@angular/core';

import {GithubService} from './github.service';
import {repos} from './repos';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.css']
})

export class Example03Component {
  userName = 'tektutorialshub';
  pageNo  = '1';
  sortOn = 'description';

  repos: repos[];

  loading = false;
  errorMessage = '';

  constructor(private githubService: GithubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName,this.pageNo,this.sortOn)
      .subscribe(
        (response) => {this.repos = response;},
        (error) => {
          this.errorMessage = error.message; this.loading = false;
        },
        () => {this.loading = false;}
      )
  }

}
