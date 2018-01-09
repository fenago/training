import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { course } from '../shared/models/course.model';

@Injectable()
export class courseService {

  constructor(private http: HttpClient) { }

  getcourses(): Observable<course[]> {
    return this.http.get<course[]>('/api/courses');
  }

  countcourses(): Observable<number> {
    return this.http.get<number>('/api/courses/count');
  }

  addcourse(course: course): Observable<course> {
    return this.http.post<course>('/api/course', course);
  }

  getcourse(course: course): Observable<course> {
    return this.http.get<course>(`/api/course/${course._id}`);
  }

  editcourse(course: course): Observable<string> {
    return this.http.put(`/api/course/${course._id}`, course, { responseType: 'text' });
  }

  deletecourse(course: course): Observable<string> {
    return this.http.delete(`/api/course/${course._id}`, { responseType: 'text' });
  }

}
