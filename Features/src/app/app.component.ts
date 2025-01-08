import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { courses } from '../db-data';
import { Course } from '../model/Course';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe, NgFor, NgIf, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent,NgIf],
    // NgFor,DatePipe,UpperCasePipe,TitleCasePipe,LowerCasePipe,DecimalPipe,PercentPipe,CurrencyPipe,JsonPipe,KeyValuePipe
        
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Features';

  // CourseTitle = courses[0].description;
  // CourseDescription = courses[0].longDescription
  // CourseImage= courses[0].iconUrl
  startDate= new Date(2025,0,6);
  price: number =78.659314
  rate: number =0.73
  testobj={id:1,name:"siba"}

  courseloop = courses;

  courseDBData = courses[0]
  course1 = courses[1]  
  course2 = courses[2]
  
viewedCourse: Course={};

@ViewChild('cardRef1')
card1!: CourseCardComponent;

@ViewChild('cardRef2')
card2!: CourseCardComponent;

@ViewChild('container')
containerDiv !:ElementRef;

constructor(){
  console.log('constructor-card:',this.card1);
  console.log('constructor-card:',this.card2);
  console.log('constructor-containerDiv:',this.containerDiv);
}
  ngAfterViewInit(): void {
    console.log('card:',this.card1);
    console.log('card:',this.card2);
    console.log('containerDiv:',this.containerDiv);
    // this.courseloop[0].description="test"
  }




  onClickcoursecard(coursedetail:Course){
    // console.log(coursedetail)
    this.viewedCourse=coursedetail;
    // console.log('card:',this.card1.coursedetail.description);
    // console.log('card:',this.card2.coursedetail.description);
    // console.log('containerDiv:',this.containerDiv);

  }
  
}
