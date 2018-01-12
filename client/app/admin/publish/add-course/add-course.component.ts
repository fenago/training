import { Component, OnInit, Input } from '@angular/core';
import { course } from '../../../shared/models/course.model';
import { courseService } from '../../../services/course.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FileUploader } from 'ng2-file-upload';

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

  constructor(private CourseService: courseService, private formBuilder: FormBuilder, private toast: ToastComponent) { }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      eta: ['', Validators.required],
      description: ['', Validators.required],
      image: null
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
        this.addCourseForm.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        }, {
            emitModelToViewChange: false
          });
      };
    }
  }

  submit() {
    if (typeof (this.course._id) === 'string') {
      this.CourseService.editcourse(this.course).subscribe(res => {
        console.log(res);
        this.toast.setMessage('item added successfully.', 'success');
      });
    } else {
      this.course.title = this.addCourseForm.value.title;
      this.course.price = this.addCourseForm.value.price;
      this.course.eta = this.addCourseForm.value.eta;
      this.course.description = this.addCourseForm.value.description;
      this.course.image = this.addCourseForm.value.image;
      this.course.isPublished = false;
      this.CourseService.addcourse(this.course).subscribe(
        res => {
          console.log(res);
          this.course = res;
          this.currentTab = 2;
          this.toast.setMessage('item added successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
