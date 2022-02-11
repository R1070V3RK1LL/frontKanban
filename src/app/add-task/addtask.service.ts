import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    name: string,
    price: number,
    brand: string,
    img: string,
    quantity: number
  ): Observable<any> {
    var body = {
      name,
      price,
      brand,
      img,
      quantity,
    };
    return this.http.post<Task>('http://localhost:8090/api/Tasks', body);
  }
  // add Task to campaign.
  public addTaskToCampaign(
    name: string,
    bid: number,
    description: string,
    Task: Task,

  ): Observable<any> {
    var body = {
      name,
      bid,
      description,
      Task,
    };
    return this.http.post<Task>('http://localhost:8090/api/Tasks', body);
  }
  // update Task.
  public updateTask(
    id: number,
    name: string,
    price: number,
    brand: string,
    img: string,
    quantity: number
  ): Observable<any> {
    var body = {
      name,
      price,
      brand,
      img,
      quantity,
    };
    return this.http.put<Task>(
      `http://localhost:8090/api/Tasks/${id}`,
      body
    );
  }
  // delete Task.
  public deleteTask(id: number): Observable<any> {
    return this.http.delete<Task>(
      `http://localhost:8090/api/Tasks/${id}`
    );
  }
    // search for Tasks.
    public getSearchTasks(filter: string): Observable<any> {
      return this.http.post<Task>(
        `http://localhost:8090/api/Tasks/search`,filter
      );
    }
}
