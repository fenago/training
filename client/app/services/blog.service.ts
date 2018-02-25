import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { globals } from './../globals';

import { blog } from '../shared/models/blog.model';

@Injectable()
export class BlogService {

  url = globals.server_url;

  constructor(private http: HttpClient) { }

  getblogs(): Observable<blog[]> {
    return this.http.get<blog[]>(this.url + '/api/blogs');
  }
  getblogsShallow(): Observable<blog[]> {
    return this.http.get<blog[]>(this.url + '/api/blogs/shallow');
  }

  countblogs(): Observable<number> {
    return this.http.get<number>(this.url + '/api/blogs/count');
  }

  addblog(data): Observable<blog> {
    console.log('insert', data);
    return this.http.post<blog>(this.url + '/api/blog', data);
  }

  getblog(blogId: string): Observable<blog> {
    return this.http.get<blog>(this.url + `/api/blog/${blogId}`);
  }
  editblog(blog: blog): Observable<string> {
    console.log('edit', blog);
    return this.http.put(this.url + `/api/blog/${blog._id}`, blog, { responseType: 'text' });
  }

  deleteblog(blog: blog): Observable<string> {
    return this.http.delete(this.url + `/api/blog/${blog._id}`, { responseType: 'text' });
  }
}
