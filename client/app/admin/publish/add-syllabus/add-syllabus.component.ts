import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { courseService } from '../../../services/course.service';
import { course } from '../../../shared/models/course.model';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';


@Component({
  selector: 'app-add-syllabus',
  templateUrl: './add-syllabus.component.html',
  styleUrls: ['./add-syllabus.component.css']
})
export class AddSyllabusComponent implements OnInit {
  options: any;
  fileUrl: string;
  public uploader: FileUploader;
  private cloudResponse: any;
  isLoading = false;

  @Input() course: course;
  @Output() courseChange = new EventEmitter<course>();
  constructor(private courseService: courseService,
    private toast: ToastComponent,
    private cloudinary: Cloudinary) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    /*
     * Cloudinary configuration
     */
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
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
      this.course.syllabusFile = this.cloudResponse.url;
      this.isLoading = false;
      console.log(response);
      this.toast.setMessage('file uploaded successfully.', 'success');
    };

    this.options = {
      height: 300,
      fileUpload: false,
      imageUpload: false
    };
  }
  previewImage(event) {
    this.fileUrl = this.uploader.queue[this.uploader.queue.length - 1]._file.name;
    console.log(this.uploader.queue[this.uploader.queue.length - 1]._file);

  }

  uploadFile() {
    this.isLoading = true;
    this.uploader.queue[this.uploader.queue.length - 1].upload();
  }

}
