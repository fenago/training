import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { blog } from '../../shared/models/blog.model';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.css']
})
export class BlogReadComponent implements AfterViewInit {
  blog = new blog();
  isLoading = true;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngAfterViewInit() {
    this.route.params.subscribe(res => {
      let id = res['id'];
      if (id) {
        this.blogService.getblog(id).subscribe(response => {
          this.blog = response;
          this.isLoading = false;
          document.getElementById('blog').innerHTML = String(this.blog.content);
        })
      }
    })
  }


}
