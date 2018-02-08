import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { globals } from './../globals';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

  user: User;
  url = globals.server_url;

  constructor(private http: HttpClient) { }

  /*
  * @note: to increase security, the condition is used to prevent
     any one signing up as admin through client-side
  *
  */

  register(user: User): Observable<User> {
    user.role = user.role === 'admin' ? 'user' : 'user';
    return this.http.post<User>(this.url + '/api/user', user);
  }

  login(credentials): Observable<any> {
    console.log(credentials);
    return this.http.post<any>(this.url + '/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>(this.url + '/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/api/user', user);
  }

  getUser(user: any): Observable<User> {
    user = typeof (user) === 'object' ? user._id : user;
    return this.http.get<User>(this.url + `/api/user/${user}`);
  }

  editUser(user: User): Observable<string> {
    return this.http.put(this.url + `/api/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(this.url + `/api/user/${user._id}`, { responseType: 'text' });
  }

}
