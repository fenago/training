import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { blog } from '../../shared/models/blog.model';
import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css']
})
export class BlogDashboardComponent implements OnInit {
  blogs: blog[] = [];
  isLoading = true;

  constructor(private BlogService: BlogService,
    public auth: AuthService,
    private toast: ToastComponent) { }

  ngOnInit() {
    console.log(this.auth.isAdmin);
    this.BlogService.getblogs().subscribe(res => {
      this.blogs = res;
      this.isLoading = false;
      for (var i = 0; i < this.blogs.length; i++) {
        var date = this.blogs[i].date;
        console.log(date);
        this.blogs[i].date = date.split('(')[0];
      }
    });
  }

}
