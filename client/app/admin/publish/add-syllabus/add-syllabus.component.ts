import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { courseService } from '../../../services/course.service';
import { course } from '../../../shared/models/course.model';
import { ToastComponent } from '../../../shared/toast/toast.component';


@Component({
  selector: 'app-add-syllabus',
  templateUrl: './add-syllabus.component.html',
  styleUrls: ['./add-syllabus.component.css']
})
export class AddSyllabusComponent implements OnInit {
  options: any;

  @Input() course: course;
  @Output() courseChange = new EventEmitter<course>();
  constructor(private courseService: courseService, private toast: ToastComponent) { }

  ngOnInit() {
    this.options = {
      height: 300,
      fileUpload: false,
      imageUpload: false
    };
  }
}
