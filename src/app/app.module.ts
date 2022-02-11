import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DevelopersListService } from './developers-list/developers-list.service';
import { AddTaskService } from './add-task/addtask.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DevelopersListComponent,
    TaskBoardComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DevelopersListService,
    AddTaskService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
