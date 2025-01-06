import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { courses } from '../db-data';
import { Course } from '../model/Course';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent,NgIf ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Features';

  // CourseTitle = courses[0].description;
  // CourseDescription = courses[0].longDescription
  // CourseImage= courses[0].iconUrl

  courseloop = courses;

  courseDBData = courses[0]
  course1 = courses[1] 
  course2 = courses[2]
  
viewedCourse: Course={};



  onClickcoursecard(coursedetail:Course){
    console.log(coursedetail)
    this.viewedCourse=coursedetail;
  }
  
}
