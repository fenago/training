import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseService } from '../services/course.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  course: any;
  isLoading = true;

  constructor(private route: ActivatedRoute, private CourseService: courseService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
      if (typeof (params['id']) === 'string') {
        this.CourseService.getSyllabus(params['id']).subscribe(res => {
          this.course = res;
          console.log(this.course);
          this.isLoading = false;
        });
      }
    });
  }

}
