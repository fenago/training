import { Component, OnInit } from '@angular/core';

import { courseService } from '../services/course.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { course } from '../shared/models/course.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  isLoading = true;
  resourcesFlag = false;

  course = new course();

  constructor(private courseservice: courseService,
    public toast: ToastComponent,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
  }
  showResources() {
    this.resourcesFlag = this.resourcesFlag ? false : true;
  }

  routeToLogin() {
    if (!this.auth.loggedIn) {
      this.router.navigate(['login']);
    };
  }

}
