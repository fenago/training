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
  imgUrl: string;

  constructor(private CourseService: courseService,
    private toast: ToastComponent,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (typeof (params['id']) === 'string') {
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

      reader.onload = (e: any) => {
        this.imgUrl = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      this.course.image = file;
    }
  }

  submit() {
    const file = {
      image: this.course.image ? this.course.image : null,
      courseId: this.course._id ? this.course._id : null
    };
    this.course.image = typeof(this.course.image) === 'string' ? this.course.image : '' ;
    if (typeof (this.course._id) === 'string') {
      this.CourseService.editcourse(this.course).subscribe(res => {
        if (file.image) {
          this.CourseService.uploadTitleImage(file).subscribe(response => {
            this.toast.setMessage('Image uploaded successfully.', 'success');
          });
        } else { this.toast.setMessage('course edited successfully.', 'success'); }
      },
        error => console.log(error));
    } else {
      this.course.isPublished = false;
      this.CourseService.addcourse(this.course).subscribe(
        res => {
          if (file.image) {
            file.courseId = res._id;
            this.course = res;
            this.course.image =  './uploads/title/' + res._id + '.' + file.image.type.split('/')[1];
            this.CourseService.uploadTitleImage(file).subscribe(response => {
              console.log(this.course);
              this.CourseService.editcourse(this.course).subscribe(Res => {
                this.toast.setMessage('course added successfully.', 'success');
              });
            });
          }
          this.course = res;
        },
        error => console.log(error)
      );
    }
  }

}
