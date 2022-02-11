import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../models/developer.model';
interface Task {
  title: string;
  type:string;
  nbHoursForecast:number;
  nbHoursReal:number;
  developer:Developer;
}

@Injectable()
export class AddTaskService {
  constructor(private http: HttpClient) { }
  // list of Tasks.
  public loadTasks(): Observable<any> {
    return this.http.get<Task>('http://localhost:8090/api/Tasks');
  }

  // find Task.
  public findTask(id: number): Observable<any> {
    return this.http.get<Task>(`http://localhost:8090/api/Tasks/${id}`);
  }
  // add Task.
  public addTask(
    title: string,
    type:string,
    nbHoursForecast:number,
    nbHoursReal:number,
    developer:Developer,
  ): Observable<any> {
    var body = {
      title,
      type,
      nbHoursForecast,
      nbHoursReal,
      developer,
    };
    return this.http.post<Task>('http://localhost:8090/api/Tasks', body);
  }
  // add Task to Board.
  public addTaskToBoard(
    title: string,
    type:string,
    nbHoursForecast:number,
    nbHoursReal:number,
    developer:Developer,

  ): Observable<any> {
    var body = {
      title,
      type,
      nbHoursForecast,
      nbHoursReal,
      developer,
    };
    return this.http.post<Task>('http://localhost:8090/api/Tasks', body);
  }
  // update Task.
  public updateTask(
    id: number,
    title: string,
    type:string,
    nbHoursForecast:number,
    nbHoursReal:number,
    developer:Developer,
  ): Observable<any> {
    var body = {
      id,
      title,
      type,
      nbHoursForecast,
      nbHoursReal,
      developer,
    };
    return this.http.put<Task>(
      `http://localhost:8080/api/tasks/${id}`,
      body
    );
  }
  // delete Task.
  public deleteTask(id: number): Observable<any> {
    return this.http.delete<Task>(
      `http://localhost:8080/api/tasks/${id}`
    );
  }
    // search for Tasks.
    public getSearchTasks(filter: string): Observable<any> {
      return this.http.post<Task>(
        `http://localhost:8080/api/tasks/search`,filter
      );
    }
}
