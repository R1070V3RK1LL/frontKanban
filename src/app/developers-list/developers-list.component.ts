import { Component, OnInit } from '@angular/core';
import { Developer } from './../models/developer.model';
import { DevelopersListService } from './developers-list.service';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {

  private developerService:DevelopersListService;
  developers:Developer[]=[];
  constructor(developerService:DevelopersListService) {
    this.developerService=developerService;
  }

  ngOnInit(): void {
    this.developerService.loadDevelopers().subscribe(
      (response) => {
        this.developers = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }

}
