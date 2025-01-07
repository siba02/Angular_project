import { Component, EventEmitter, Input, Output } from '@angular/core';
import { courses } from '../../db-data';
import { Course } from '../../model/Course';
import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
// courses = courses[0]
// courses1 =courses[1]
 @Input({required: true})
  coursedetail!:Course 

  @Input({required: true})
  index!: number; 

  @Input({required: true})
  count!: number; 



  @Output() courseselected = new EventEmitter<Course>();

  onCourseview(){
  // console.log(event)
  this.courseselected.emit(this.coursedetail);

  }

isImageVisible(){
  return this.coursedetail.iconUrl;
}

cardclasses(){
  // return 'beginner'
  // return {'beginner':true}
  if(this.coursedetail.category == 'BEGINNER'){
    return  ['beginner'] 
  }else{
    return ''
  }
}


cardStyles(){
  if(this.coursedetail.category == 'BEGINNER'){
  // return {'text-decoration':this.coursedetail.category == 'BEGINNER'?"underline":''}
  return {'text-decoration':'underline'}
 }else{
  return {'color':'blue'}
 }
}

// cardStyles(){
//   return {'background-image': 'url('+this.coursedetail.iconUrl+')'}
//   }
  
}