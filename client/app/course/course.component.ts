import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { courseService } from '../services/course.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { course } from '../shared/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class courseComponent implements OnInit {

  course = new course();
  courses: course[] = [];
  isLoading = true;
  isEditing = false;

  addcourseForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private courseservice: courseService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getcourses();
    this.addcourseForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getcourses() {
    this.courseservice.getcourses().subscribe(
      data => this.courses = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addcourse() {
    this.courseservice.addcourse(this.addcourseForm.value).subscribe(
      res => {
        this.courses.push(res);
        this.addcourseForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(course: course) {
    this.isEditing = true;
    this.course = course;
  }

  cancelEditing() {
    this.isEditing = false;
    this.course = new course();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the courses to reset the editing
    this.getcourses();
  }

  editcourse(course: course) {
    this.courseservice.editcourse(course).subscribe(
      () => {
        this.isEditing = false;
        this.course = course;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deletecourse(course: course) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.courseservice.deletecourse(course).subscribe(
        () => {
          const pos = this.courses.map(elem => elem._id).indexOf(course._id);
          this.courses.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
