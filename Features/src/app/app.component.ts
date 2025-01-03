import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { courses } from '../db-data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Features';

  // CourseTitle = courses[0].description;
  // CourseDescription = courses[0].longDescription
  // CourseImage= courses[0].iconUrl

  courseDBData = courses[0]
  course1 = courses[1] 
  course2 = courses[2]
  
  
}
