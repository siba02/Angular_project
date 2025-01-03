import { Component } from '@angular/core';
import { courses } from '../db-data';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Features';

  course = courses[0].category;
  
}
