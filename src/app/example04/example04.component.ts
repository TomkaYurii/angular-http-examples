import {Component, OnInit} from '@angular/core';
import {Person} from "./person";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-example04',
  templateUrl: './example04.component.html',
  styleUrls: ['./example04.component.css']
})
export class Example04Component  implements OnInit {

  title = 'httpGet Example';
  people:Person[];
  person = new Person();

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })

  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })
  }

}
