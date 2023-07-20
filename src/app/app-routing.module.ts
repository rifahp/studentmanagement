import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',redirectTo:'students/',pathMatch:'full'},
  {path:'students/admin', component:StudentsComponent},
  {path:'students/view/:studentid', component:ViewStudentDetailsComponent},
  {path: 'students/update/:Id', component:UpdateStudentDetailsComponent},
  {path: 'students/add', component:AddStudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
