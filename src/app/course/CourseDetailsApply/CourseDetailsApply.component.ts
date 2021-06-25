import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-CourseDetailsApply',
  templateUrl: './CourseDetailsApply.component.html',
  styleUrls: ['./CourseDetailsApply.component.css']
})
export class CourseDetailsApplyComponent implements OnInit {
public CourseName:any;
  constructor(private route:ActivatedRoute,private route1:Router) { }

  ngOnInit() {
    this.CourseName=this.route.snapshot.params['CourseName'];
  }
  onSubmit(Form:NgForm)
  {
    alert("Your Registration is Successful");
  }

}
