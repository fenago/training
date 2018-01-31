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
  getcoursesShallow(): Observable<course[]> {
    return this.http.get<course[]>('/api/courses/shallow');
  }

  countcourses(): Observable<number> {
    return this.http.get<number>('/api/courses/count');
  }

  addcourse(data): Observable<course> {
    console.log('insert', data);
    return this.http.post<course>('/api/course', data);
  }

  uploadTitleImage(file): Observable<any> {
    console.log('image', file);
    const formData = new FormData();
    formData.append('image', file.image);
    return this.http.post(`/api/course/upload/${file.courseId}`, formData);
  }
  payment(token): Observable<any> {
    console.log(token);
    return this.http.post('/api/course/payment', token);
  }

  getcourse(courseId: string): Observable<course> {
    return this.http.get<course>(`/api/course/${courseId}`);
  }
  getSyllabus(courseId: string): Observable<course> {
    return this.http.get<course>(`/api/course/syllabus/${courseId}`);
  }
  getContent(courseId: string): Observable<course> {
    return this.http.get<course>(`/api/course/content/${courseId}`);
  }
  getUsers(courseId: string ): Observable<course> {
    return this.http.get<course>(`/api/course/getUsers/${courseId}`);
  }

  editcourse(course: course): Observable<string> {
    console.log('edit', course);
    return this.http.put(`/api/course/${course._id}`, course, { responseType: 'text' });
  }
  addUser(data: any): Observable<string> {
    console.log(data);
    return this.http.put(`/api/course/addUser/${data.courseId}`, data, { responseType: 'text' });
  }

  deletecourse(course: course): Observable<string> {
    return this.http.delete(`/api/course/${course._id}`, { responseType: 'text' });
  }

}
