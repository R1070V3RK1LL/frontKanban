import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTaskService } from '../add-task/addtask.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  private taskService:AddTaskService;
  tasks:Task[]=[];
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
}
