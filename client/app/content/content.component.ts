import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseService } from '../services/course.service';
import { course } from '../shared/models/course.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  course: any;
  elem: HTMLTableElement;
  dividerRatio = 6;
  constructor(private route: ActivatedRoute, private CourseService: courseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (typeof (params['id']) === 'string') {
        this.CourseService.getContent(params['id']).subscribe(res => {
          this.course = res;
          console.log(this.course);
        });
      }
    });
  }

}
