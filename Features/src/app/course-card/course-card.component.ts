import { Component, EventEmitter, Input, Output } from '@angular/core';
import { courses } from '../../db-data';
import { Course } from '../../model/Course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
// courses = courses[0]
// courses1 =courses[1]
 @Input({required: true})
  coursedetail!:Course 

  @Output() courseselected = new EventEmitter<Course>();

  onCourseview(){
  this.courseselected.emit(this.coursedetail);

  }

}
