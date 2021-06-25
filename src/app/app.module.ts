import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { NavBarComponent } from './Nav-bar/Nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from './Service/courses.service';
import { ApplycourseComponent } from './course/applycourse/applycourse.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsApplyComponent } from './course/CourseDetailsApply/CourseDetailsApply.component';
import { DashboardComponent } from './course/dashboard/dashboard.component';
import { UserLoginComponent } from './Users/User-login/User-login.component';
import { PictureComponent } from './Nav-bar/picture/picture.component';
import { SkipLoginComponent } from './skipLogin/skipLogin.component';
import { Course2Component } from './Courses/Course2/Course2.component';
import { Course2ListComponent } from './Courses/Course2List/Course2List.component';
import { CourseService } from './Service/Course.service';


const appRoutes:Routes=[
  { path:'', component:ApplycourseComponent},
    {path:'apply-course', component:ApplycourseComponent},
    {path:'Course-details/:CourseName',component:CourseDetailsApplyComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'user/login',component:UserLoginComponent},
    {path:'skip',component:SkipLoginComponent},
]

@NgModule({
  declarations: [					
    AppComponent,
    LoginComponent,
      CourseComponent,
      CourseListComponent,
      NavBarComponent,
      ApplycourseComponent,
      CourseDetailsApplyComponent,
      DashboardComponent,
      UserLoginComponent,
      PictureComponent,
      SkipLoginComponent,
      Course2Component,
      Course2ListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CoursesService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }