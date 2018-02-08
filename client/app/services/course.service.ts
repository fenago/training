import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { globals } from './../globals';

import { course } from '../shared/models/course.model';

@Injectable()
export class courseService {

  url = globals.server_url;

  constructor(private http: HttpClient) { }

  getcourses(): Observable<course[]> {
    return this.http.get<course[]>(this.url + '/api/courses');
  }
  getcoursesShallow(): Observable<course[]> {
    return this.http.get<course[]>(this.url + '/api/courses/shallow');
  }

  countcourses(): Observable<number> {
    return this.http.get<number>(this.url + '/api/courses/count');
  }

  addcourse(data): Observable<course> {
    console.log('insert', data);
    return this.http.post<course>(this.url + '/api/course', data);
  }

  uploadTitleImage(file): Observable<any> {
    console.log('image', file);
    const formData = new FormData();
    formData.append('image', file.image);
    return this.http.post( this.url + `/api/course/upload/${file.courseId}`, formData);
  }
  payment(token): Observable<any> {
    console.log(token);
    return this.http.post(this.url + '/api/course/payment', token);
  }

  getcourse(courseId: string): Observable<course> {
    return this.http.get<course>(this.url + `/api/course/${courseId}`);
  }
  getSyllabus(courseId: string): Observable<course> {
    return this.http.get<course>(this.url + `/api/course/syllabus/${courseId}`);
  }
  getContent(courseId: string): Observable<course> {
    return this.http.get<course>(this.url + `/api/course/content/${courseId}`);
  }
  getUsers(courseId: string): Observable<course> {
    return this.http.get<course>(this.url + `/api/course/getUsers/${courseId}`);
  }

  editcourse(course: course): Observable<string> {
    console.log('edit', course);
    return this.http.put(this.url + `/api/course/${course._id}`, course, { responseType: 'text' });
  }
  addUser(data: any): Observable<string> {
    console.log(data);
    return this.http.put(this.url + `/api/course/addUser/${data.courseId}`, data, { responseType: 'text' });
  }

  deletecourse(course: course): Observable<string> {
    return this.http.delete(this.url + `/api/course/${course._id}`, { responseType: 'text' });
  }

}
