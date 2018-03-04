import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseService } from '../services/course.service';
import { AuthService } from '../services/auth.service';
import { course } from '../shared/models/course.model';
import { CanActivate } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  course: any;
  elem: HTMLTableElement;
  dividerRatio = 6;
  courseId: string;
  toggle = false;
  preview = false;
  constructor(private route: ActivatedRoute, private CourseService: courseService, private AuthService: AuthService) { }

  ngOnInit() {
    if (this.canActivate()) {
      this.getData();
    } else {
    }
  }
  getData() {
    if (typeof (this.courseId) === 'string') {
      this.CourseService.getContent(this.courseId).subscribe(res => {
        this.course = res;
        if (this.preview) {
          for (var i = 0; i < this.course.content.chapters.length; i++) {
            if (!this.course.content.chapters[i].preview) {
              this.course.content.chapters.splice(i, 1);
            }
          }
        }
      });
    }
  }

  resourcesToggle() {
    this.toggle = this.toggle ? false : true;
    if (this.toggle) {
      $('#main').addClass('hide');
      $('#resources').removeClass('hide');
    } else {
      $('#main').removeClass('hide');
      $('#resources').addClass('hide');
    }
  }
  canActivate(): Boolean {
    console.log('canActivate');
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.preview = Boolean(params['preview']) ? true : false;
      this.CourseService.getUsers(params['id']).subscribe(res => {
        console.log(res);
        for (let i = 0; i < res.users.length; i++) {
          if (this.AuthService.currentUser._id == res[i]) {
            console.log('allowed');
            this.getData();
            return true;
          }
        }
        return false;
      });
    });
    return true;
  }

}
