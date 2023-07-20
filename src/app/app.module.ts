import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentDetailsComponent,
    NavbarComponent,
    FilterPipe,
    StudentsComponent,
    UpdateStudentDetailsComponent,
    ViewStudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
