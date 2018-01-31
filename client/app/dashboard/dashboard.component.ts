import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { courseService } from '../services/course.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { course } from '../shared/models/course.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  course = new course();
  myCoursesToggle = false;
  self: any;

  courses: course[] = [];
  isLoading = true;
  isEditing = false;

  addcourseForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private CourseService: courseService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private router: Router,
    private UserService: UserService,
    private AuthService: AuthService) {
  }

  ngOnInit() {
    this.self = this;
    this.getcourses();
    this.addcourseForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getcourses() {
    this.CourseService.getcourses().subscribe(
      data => {
        this.courses = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  cb(token) {
    console.log(self);
    console.log(this);
    this.CourseService.payment(token).subscribe(res => {
      console.log(res);
    });
  }
  purchase(i) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_c16HmKTycQKMFABeEadOKH2Z',
      locale: 'auto',
      token: (token) => {
        token.price = Number(this.courses[i].price) * 100;
        token.currency = 'usd';
        token.description = 'single course purchase - ' + this.courses[i].title;
        this.CourseService.payment(token).subscribe(res => {
          if (res.failure_code) {
            this.toast.setMessage('transaction failed please try again or contact administrator.', 'warning');
          } else {
            const payload = {
              courseId: this.courses[i]._id,
              userId: this.AuthService.currentUser._id
            };
            this.CourseService.addUser(payload).subscribe(res2 => {
              if (res2) {
                this.courses[i].users.push(payload.userId);
                this.toast.setMessage('course purchased.', 'success');
              } else {
                this.toast.setMessage('failed to purchase he course please contact administrator.', 'warning');
              }
            });
          }
        });
      }
    });


    handler.open({
      name: this.courses[i].title,
      description: 'single course purchase',
      amount: Number(this.courses[i].price) * 100
    });

  }

  // const payload = {
  //   courseId: this.courses[i]._id,
  //   userId: this.AuthService.currentUser._id
  // };

  // this.CourseService.addUser(payload).subscribe(res => {
  //   this.courses[i].users.push(payload.userId);
  //   this.toast.setMessage('course purchased.', 'success');
  // });


  deletecourse(course: course) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.CourseService.deletecourse(course).subscribe(
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
