import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../../services/blog.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { blog } from '../../shared/models/blog.model';

@Component({
  selector: 'app-un-published-blogs',
  templateUrl: './un-published-blogs.component.html',
  styleUrls: ['./un-published-blogs.component.css']
})
export class UnPublishedBlogsComponent implements OnInit {
  blog = new blog();

  blogs: blog[] = [];
  isLoading = true;
  isEditing = false;

  constructor(private blogservice: BlogService,
    public toast: ToastComponent,
    private router: Router) { }

  ngOnInit() {
    this.getblogs();
  }

  getblogs() {
    this.blogservice.getblogsShallow().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  publish(blog: blog) {
      blog.isPublished = true;
      this.blogservice.editblog(blog).subscribe(res => {
        console.log(res);
        this.getblogs();
      });
  }

  deleteblog(blog: blog) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.blogservice.deleteblog(blog).subscribe(
        () => {
          const pos = this.blogs.map(elem => elem._id).indexOf(blog._id);
          this.blogs.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }


}
