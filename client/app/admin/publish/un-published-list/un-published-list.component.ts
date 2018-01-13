import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { courseService } from '../../../services/course.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { course } from '../../../shared/models/course.model';

@Component({
  selector: 'app-un-published-list',
  templateUrl: './un-published-list.component.html',
  styleUrls: ['./un-published-list.component.css']
})
export class UnPublishedListComponent implements OnInit {
  @Input()
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
    public toast: ToastComponent,
    private router: Router) { }

  ngOnInit() {
    this.getcourses();
    this.addcourseForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getcourses() {
    this.courseservice.getcoursesShallow().subscribe(
      data => {
        this.courses = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  publish(course: course) {
    this.courseservice.getcourse(course._id).subscribe( response => {
      response.isPublished = true;
      this.courseservice.editcourse(response).subscribe( res => {
        console.log(res);
        this.getcourses();
      });
    });
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
