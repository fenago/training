import { Component, OnInit, Input } from '@angular/core';
import { courseService } from '../../../services/course.service';
import { course } from '../../../shared/models/course.model';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
declare var $: any;

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
  private resourcesUploader: FileUploader;
  private cloudResponse: any;
  isLoading = false;
  isLoading2 = false;
  chapterIndex: number;
  lessonIndex: number;
  imgPreview: String;
  resourcesEnabled = false;
  uploaded = false;

  constructor(private courseService: courseService,
    private toast: ToastComponent,
    private cloudinary: Cloudinary) { }
  valuechange($event) {
    console.log($event);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    $('.lessonName').off('keydown');
    /*
     * Cloudinary configuration
     */
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      autoUpload: false,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    const uploaderOptions2: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      removeAfterUpload: true,
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
    this.resourcesUploader = new FileUploader(uploaderOptions2);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      // Add file to upload
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    this.resourcesUploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
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
      console.log(this.cloudResponse);
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

    this.resourcesUploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {
      var file = JSON.parse(response);
      this.course.content.chapters[this.chapterIndex].resources.push({ name: file.original_filename, link: file.url });

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
    } else if (this.uploader.queue[this.uploader.queue.length - 1]._file.type.split('/')[1] === 'pdf') {
      this.isLoading = false;
      this.fileUrl = this.uploader.queue[this.uploader.queue.length - 1]._file.name;
      this.toast.setMessage('file added', 'success');
    } else {
      this.isLoading = false;
      this.toast.setMessage('invalid format, supported formats are mp4, png, jpg and pdf', 'warning');
    }


  }
  selectResources(i) {
    this.chapterIndex = i;
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
      preview: false,
      resources: [],
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
  removeResource(indices) {
    this.course.content.chapters[indices.chapter].resources.splice(indices.resource, 1);
  }


}
