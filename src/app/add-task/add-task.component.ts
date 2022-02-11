import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { AddTaskService } from './addtask.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private taskService: AddTaskService) { }
  private title: string = "";
  private type: string = "";
  private nbHoursForecast: number = 0;
  private nbHoursReal: number = 0;

  addtaskForm = this.formBuilder.group({
      title:this.title,
      type:this.type,
      nbHoursForecast:this.nbHoursForecast,
      nbHoursReal:this.nbHoursReal,
  });



  ngOnInit(): void {

  }

  submit() {

    var title = this.addtaskForm.get('title')?.value;
    var type = this.addtaskForm.get('type')?.value;
    var nbHoursForecast = this.addtaskForm.get('nbHoursForecast')?.value;
    var nbHoursReal = this.addtaskForm.get('nbHoursReal')?.value;
    var developers=this.addtaskForm.get('developer')?.value;

    this.taskService.addTask(title, nbHoursForecast, type, nbHoursReal,developers).subscribe(
      (response) => {
        console.log('response received', response)
      },
      (error) => {
        console.error('Request failed with error', error)
      })

  }
}

