import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/Course.service';

@Component({
  selector: 'app-Course2List',
  templateUrl: './Course2List.component.html',
  styleUrls: ['./Course2List.component.css']
})
export class Course2ListComponent implements OnInit {

  Courses:any
  constructor(private courseService:CourseService) { }

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
