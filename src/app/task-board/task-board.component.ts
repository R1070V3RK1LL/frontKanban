import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTaskService } from '../add-task/addtask.service';
import { Task } from '../models/task.model';
import { TaskMoveAction } from '../models/taskMoveAction';
import { TaskStatus } from '../models/taskStatus.model';
import { TaskTypes } from '../models/taskTypes.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  private taskService:AddTaskService;
  tasks:Task[]=[];
  tasksStatus:TaskStatus[]=[];
  tasksTypes:TaskTypes[]=[];
  action:TaskMoveAction=new TaskMoveAction();
  private router:Router;
  constructor(taskService:AddTaskService, router:Router) {
    this.taskService=taskService;
    this.router=router;
  }

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe(
      (response) => {
        this.tasks = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
  loadTaskStatus():void{
    this.taskService.loadTasksStatus().subscribe(
      (response) => {
        this.tasksStatus = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
  loadTaskTypes():void{
    this.taskService.loadTasksTypes().subscribe(
      (response) => {
        this.tasksTypes = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
  moveTask(action:TaskMoveAction,id:number):void{
    this.taskService.moveTask(action,id).subscribe(
      (response) => {
        this.action = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
}
