import { Component, OnInit, Input } from '@angular/core';
import { course } from '../../../shared/models/course.model';
import { courseService } from '../../../services/course.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input()
  course: course = new course();
  addCourseForm: FormGroup;
  currentTab = 2;

  constructor(private CourseService: courseService,
    private toast: ToastComponent,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (typeof(params['id']) === 'string') {
        console.log('hello');
        this.CourseService.getcourse(params['id']).subscribe(res => {
          this.course = res;
          console.log(res);
        });
      }
    });
  }

  /*
   * @Description: sets the file from the input to the image field in this.addCourseForm
   */
  setImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.course.image = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        };
      };
    }
  }

  submit() {
    if (typeof (this.course._id) === 'string') {
      this.CourseService.editcourse(this.course).subscribe(res => {
        console.log(res);
        this.toast.setMessage('course edited successfully.', 'success');
      });
    } else {
      this.course.isPublished = false;
      this.CourseService.addcourse(this.course).subscribe(
        res => {
          console.log(res);
          this.course = res;
          this.currentTab = 2;
          this.toast.setMessage('course added successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
