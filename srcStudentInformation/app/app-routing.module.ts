import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:"",component:StudentComponent },
  { path:"registeration",component:StudentComponent},
  { path:"details", component:StudentListComponent },
  { path:"details/editForm", component:StudentComponent },
  { path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
