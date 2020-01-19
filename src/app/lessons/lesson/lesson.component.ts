import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input() lesson;

  constructor() { }

  ngOnInit() {
    console.log(this.lesson);
  }

}
