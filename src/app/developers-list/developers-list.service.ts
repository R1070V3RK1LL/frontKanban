import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Developer {
	id:number;
	firstName:string;
  lastName:string;
  email:string;
  password:string;
  startContract:Date;
}

@Injectable()
export class DevelopersListService {
  constructor(private http: HttpClient) { }
  // list of Developers.
  public loadDevelopers(): Observable<any> {
    return this.http.get<Developer>('http://localhost:8080/api/developers');
  }

  // find Developer.
  public findDeveloper(id: number): Observable<any> {
    return this.http.get<Developer>(`http://localhost:8080/api/developers/${id}`);
  }
  // add Developer.
  public addDeveloper(
	firstName:string,
  lastName:string,
  email:string,
  password:string,
  startContract:Date,

  ): Observable<any> {
    var body = {
      firstName,
      lastName,
      email,
      password,
      startContract,

    };
    return this.http.post<Developer>('http://localhost:8080/api/developers', body);
  }

  // update Developer.
  public updateDeveloper(
    id: number,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    startContract:Date,
  ): Observable<any> {
    var body = {
    id,
    firstName,
    lastName,
    email,
    password,
    startContract,
    };
    return this.http.put<Developer>(
      `http://localhost:8080/api/developers/${id}`,
      body
    );
  }
  // delete Developer.
  public deleteDeveloper(id: number): Observable<any> {
    return this.http.delete<Developer>(
      `http://localhost:8080/api/developers/${id}`
    );
  }
    // search for Developers.
    public getSearchDevelopers(filter: string): Observable<any> {
      return this.http.post<Developer>(
        `http://localhost:8080/api/developers/search`,filter
      );
    }
}
