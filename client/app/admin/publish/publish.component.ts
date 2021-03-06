import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { courseService } from '../../services/course.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { course } from '../../shared/models/course.model';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  isLoading = true;
  resourcesFlag = false;

  course = new course();

  constructor(private courseservice: courseService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.isLoading = false;
  }
  showResources() {
    this.resourcesFlag = this.resourcesFlag ? false : true;
  }


}
