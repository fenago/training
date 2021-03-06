import { Component, OnInit, Input } from '@angular/core';
import { course } from '../../../shared/models/course.model';
import { courseService } from '../../../services/course.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import cloudinaryConfiguration from './../../../cloudinary.config';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input()
  course: course = new course();
  imgPreview: string;
  public uploader: FileUploader;
  private cloudResponse: any;
  isLoading = true;
  priceFree: Boolean;

  constructor(private CourseService: courseService,
    private toast: ToastComponent,
    private route: ActivatedRoute,
    private router: Router,
    private cloudinary: Cloudinary) { }

  ngOnInit() {

    window.scrollTo(0, 0);
    /*
     * Cloudinary configuration
     */
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${cloudinaryConfiguration.cloud_name}/upload`,
      autoUpload: false,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    // initialize uploader
    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      // Add file to upload
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    // on upload callback of image
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.cloudResponse = JSON.parse(response);
      this.course.image = this.cloudResponse.url;
      this.isLoading = false;
      this.toast.setMessage('image uploaded successfully.', 'success');
    };

    /*
     * initialize course if it is selected to be edited from courses list.
     */
    this.route.params.subscribe(params => {
      if (typeof (params['id']) === 'string') {
        this.CourseService.getcourse(params['id']).subscribe(res => {
          this.course = res;
          console.log(this.course);
          this.imgPreview = this.course.image;
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  /*
   * @Description: read the Base64 from the selected image stream, this base64 will be used
   * to display the preview of the image
   */
  previewImage(event) {

    const reader = new FileReader();
    reader.readAsDataURL(this.uploader.queue[this.uploader.queue.length - 1]._file);
    reader.onload = (e: any) => {
      this.imgPreview = reader.result;
    };

  }

  generateCoupon() {
    if (!this.course.coupons) {
      this.course.coupons = [{
        id: this.makeid(),
        amount: 0
      }];
    } else {
      this.course.coupons.push({
        id: this.makeid(),
        amount: 0
      });
    }
    console.log(this.course);
  }
  deleteCoupon(i) {
    this.course.coupons.splice(i, 1);
  }
  refreshCouponId(i) {
    console.log(i);
    this.course.coupons[i].id = this.makeid();
  }
  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  uploadImage() {
    this.isLoading = true;
    this.uploader.queue[this.uploader.queue.length - 1].upload();
  }

  delete(course) {
    this.isLoading = true;
    this.CourseService.deletecourse(course).subscribe(res => {
      this.isLoading=false;
      this.router.navigateByUrl('/dashboard');
      this.toast.setMessage('course deleted!', 'success');
    });
  }

  submit(publish) {
    this.course.isPublished = publish;
    this.course.price = this.priceFree ? 0 : this.course.price;
    this.isLoading = true;
    console.log(this.isLoading);
    if (typeof (this.course._id) === 'string') {
      this.CourseService.editcourse(this.course).subscribe(res => {
        this.toast.setMessage('course edited successfully.', 'success');
        this.isLoading = false;
        console.log(this.isLoading);
      },
        error => console.log(error));
    } else {
      this.CourseService.addcourse(this.course).subscribe(
        res => {
          this.course = res;
          this.toast.setMessage('course added successfully.', 'success');
          this.isLoading = false;
          console.log(this.isLoading);
        },
        error => console.log(error)
      );
    }
  }

}
