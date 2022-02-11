import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddTaskComponent } from './add-task/add-task.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';


const routes: Routes = [
  { path: 'devs', component: DevelopersListComponent},
  { path: 'tasks', component: AddTaskComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],



  exports: [RouterModule]
})
export class AppRoutingModule { }
