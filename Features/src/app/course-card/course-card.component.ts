import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild } from '@angular/core';
import { courses } from '../../db-data';
import { Course } from '../../model/Course';
import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,NgStyle,NgIf],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{
 
  
// courses = courses[0]
// courses1 =courses[1]
 @Input({required: true})
  coursedetail!:Course 

//   @Input({required: true})
//   index!: number; 

//   @Input({required: true})
//   count!: number; 


@ContentChild('courseimage1')
image1!:ElementRef

@ContentChild('courseimage2')
image2!:ElementRef

@ContentChild('courseimage3')
image3!:ElementRef

@ContentChildren(CourseCardComponent)
images!:QueryList<ElementRef>

ngAfterViewInit(): void {
  // console.log('image',this.image1);
  // console.log('image',this.image2);
  // console.log('image',this.image3);
  // console.log('images',this.images);
}
    
ngAfterContentInit(): void {
  console.log('images',this.images.first); 
}


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