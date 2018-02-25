import { Component, OnInit } from '@angular/core';
import { blog } from '../../shared/models/blog.model';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import cloudinaryConfiguration from './../../cloudinary.config';
import { ToastComponent } from '../../shared/toast/toast.component';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  public uploader: FileUploader;
  private cloudResponse: any;
  blog = new blog();
  imgPreview: any;
  isLoading = false;


  constructor(private cloudinary: Cloudinary,
    private toast: ToastComponent,
    private blogService: BlogService,
    private AuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

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
      this.blog.image = this.cloudResponse.url;
      this.isLoading = false;
      this.toast.setMessage('image uploaded successfully.', 'success');
    };


    this.route.params.subscribe(params => {
      if (typeof (params['id']) === 'string') {
        this.blogService.getblog(params['id']).subscribe(res => {
          this.blog = res;
          this.imgPreview = this.blog.image;
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

  save() {
    this.blog.isPublished = this.blog.isPublished ? true : false;
    this.blog.date = Date();
    this.blog.author = this.AuthService.isAdmin ? this.blog.author : {
      id: this.AuthService.currentUser._id,
      email: this.AuthService.currentUser.email,
      username: this.AuthService.currentUser.username
    }
    this.blog.author = this.blog.author ? this.blog.author : {
      id: this.AuthService.currentUser._id,
      email: this.AuthService.currentUser.email,
      username: 'admin'
    }
    if (this.blog._id) {
      this.blogService.editblog(this.blog).subscribe(res => {
        this.toast.setMessage('Blog has been edited', 'success');
      }, (err) => {
        this.toast.setMessage('Blog could not be edited, try again or contact admin.', 'warning');
      })
    } else {
      this.blogService.addblog(this.blog).subscribe(res => {
        this.toast.setMessage('Blog has been created and sent to the admin for approval', 'success');
      }, (err) => {
        this.toast.setMessage('Blog could not be created, try again or contact admin.', 'warning');
      })
    }
  }

  uploadImage() {
    this.isLoading = true;
    this.uploader.queue[this.uploader.queue.length - 1].upload();
  }

  delete() {
    this.blogService.deleteblog(this.blog).subscribe(res => {
      this.router.navigate(['blog']);
    });
  }

}
