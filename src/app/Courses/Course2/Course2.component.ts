import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Course2',
  templateUrl: './Course2.component.html',
  styleUrls: ['./Course2.component.css']
})
export class Course2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() course:any
  Property:any={
    "CourseId":1,
    "CourseName":"CSE"
  }
  onClick()
  {
    alert("You haven't Loggedin Yet so You can't move to next page.")
  }
}
