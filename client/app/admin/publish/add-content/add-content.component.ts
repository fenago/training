import { Component, OnInit, Input } from '@angular/core';
import { courseService } from '../../../services/course.service';
import { course } from '../../../shared/models/course.model';
import { ToastComponent } from '../../../shared/toast/toast.component';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  @Input()
  course: any;
  options: any;
  chapterName: String;
  lessonName: String;
  constructor( private courseService: courseService, private toast: ToastComponent) { }

  ngOnInit() {
    this.options = {
      height: 300,
      fileUpload: false,
      imageUpload: false
    };
    if (!this.course.content) {
      this.course.content = {
        chapters: []
      };
    }
    console.log(this.course);
  }

  addChapter() {
    this.course.content.chapters.push({
      title: this.chapterName,
      lessons: []
    });
    this.chapterName = '';
  }

  addLesson(i) {
    this.course.content.chapters[i].lessons.push({
      title: this.lessonName,
      content: '',
      image: ''
    });
    this.lessonName = '';
  }


}
