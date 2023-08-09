import { Component } from '@angular/core';
import {repos} from "./repos";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-example06',
  templateUrl: './example06.component.html',
  styleUrls: ['./example06.component.css']
})

export class Example06Component {
    userName = 'tektutorialshub';
    pageNo  = '1';
    sortOn = 'description';

    repos: repos[];

    loading = false;
    errorMessage = '';

    constructor(private githubService: ApiService) {
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
                () => {this.loading = false;})
    }

}
