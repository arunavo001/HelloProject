import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Courses:any
  constructor(private courseService:CoursesService) { }

  ngOnInit() :void{
    this.courseService.getAllCourses().subscribe(
      data=>
      {
        this.Courses=data;
        console.log(data);
      },error=>{
        console.log(error)
      }
    )
  }

}
