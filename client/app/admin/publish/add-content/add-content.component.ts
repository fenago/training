import { Component, OnInit, Input } from '@angular/core';
import { courseService } from '../../../services/course.service';
import { course } from '../../../shared/models/course.model';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  @Input()
  course: any;
  options: any;
  chapterName: String = 'Add title';
  lessonName: String = 'Add title';
  fileUrl: string;
  private uploader: FileUploader;
  private cloudResponse: any;
  isLoading = false;
  chapterIndex: number;
  lessonIndex: number;
  imgPreview: String;

  constructor(private courseService: courseService,
    private toast: ToastComponent,
    private cloudinary: Cloudinary) { }

  ngOnInit() {

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
      if (this.cloudResponse.format === 'jpg' || this.cloudResponse.format === 'png') {
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].image = this.cloudResponse.url;
      } else if (this.cloudResponse.format === 'mp4') {
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].video = this.cloudResponse.url;
      } else {
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].contentFile = this.cloudResponse.url;
      }
      this.isLoading = false;
      this.toast.setMessage('file uploaded successfully.', 'success');
    };

    this.options = {
      height: 300,
      fileUpload: false,
      imageUpload: false
    };
    if (!this.course.content) {
      this.course.content = {
        chapters: []
      };
    }
  }

  previewImage(i, j) {
    this.chapterIndex = i;
    this.lessonIndex = j;
    this.lessonName = j;
    this.isLoading = true;

    if (this.uploader.queue[this.uploader.queue.length - 1]._file.type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploader.queue[this.uploader.queue.length - 1]._file);
      reader.onload = (e: any) => {
        this.imgPreview = reader.result;
        this.isLoading = false;
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].imagePreview = reader.result;
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].videoPreview = null;
      };
    } else if (this.uploader.queue[this.uploader.queue.length - 1]._file.type.split('/')[0] === 'video') {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploader.queue[this.uploader.queue.length - 1]._file);
      reader.onload = (e: any) => {
        this.isLoading = false;
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].videoPreview = reader.result;
        this.course.content.chapters[this.chapterIndex].lessons[this.lessonIndex].imagePreview = null;
      };
      this.imgPreview = ' uploaded';
    } else {
      this.isLoading = false;
      this.toast.setMessage('format not supported please use jpg,png or mp4.', 'warning');
    }


  }

  uploadFile() {
    this.isLoading = true;
    if (this.imgPreview && this.fileUrl) {
      this.uploader.queue[this.uploader.queue.length - 1].upload();
      this.uploader.queue[this.uploader.queue.length - 2].upload();
    } else {
      this.uploader.queue[this.uploader.queue.length - 1].upload();
    }

  }

  addChapter() {
    this.course.content.chapters.push({
      title: this.chapterName,
      lessons: []
    });
    this.chapterName = 'Add title';
  }

  addLesson(i) {
    this.course.content.chapters[i].lessons.push({
      title: this.lessonName,
      content: '',
      image: ''
    });
    this.lessonName = 'Add title';
  }

  removePlaceholder(event) {
    event.target.value = event.target.value === 'Add title' ? '' : event.target.value;
  }


}
