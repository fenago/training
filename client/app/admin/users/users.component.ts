import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../../shared/toast/toast.component';
import { AuthService } from '../../services/auth.service';
import { courseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';
import { MatTableDataSource } from '@angular/material';
import { course } from '../../shared/models/course.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  innerLoading = false;
  selectedUser: User = null;
  courses = [];
  courseToAddInCoupan: any;
  addCourseFlag = false;
  displayedColumns = ['username', 'Email', 'Role', 'Action'];
  dataSource: MatTableDataSource<User>;

  constructor(public auth: AuthService,
    public toast: ToastComponent,
    private userService: UserService,
    private courseService: courseService) { }

  ngOnInit() {
    this.getUsers();

    this.courseService.getcourses().subscribe(res => {
      this.courses = res;
      console.log(res);
    });
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  save() {
    this.innerLoading = true;
    this.userService.editUser(this.selectedUser).subscribe(res => {
      this.innerLoading = false;
      this.toast.setMessage('coupan saved.', 'success');
    });
  }
  removeCourseInCoupan(i, j) {
    console.log(this.selectedUser.coupans[i].courses[j]);
    this.selectedUser.coupans[i].courses.splice(j, 1);
    if (this.selectedUser.coupans[i].courses.length < 1) {
      this.selectedUser.coupans[i].courses.push({
        'name': '',
        'id': '',
        'price': 0
      });
    }
  }
  selectCourseInCoupan(course) {
    this.courseToAddInCoupan = course;
    this.addCourseFlag = true;
    console.log(this.courseToAddInCoupan);
  }
  addCourseInCoupan(i) {
    if (this.selectedUser.coupans[i].courses[0].id === '') {
      this.selectedUser.coupans[i].courses.splice(0, 1);
    }
    this.selectedUser.coupans[i].courses.push(
      {
        id: this.courseToAddInCoupan._id,
        name: this.courseToAddInCoupan.title,
        price: this.courseToAddInCoupan.price
      });
    this.addCourseFlag = false;
  }

  newCoupan(i) {
    if (!this.selectedUser.coupans) {
      this.selectedUser.coupans = [{
        amount: 0,
        id: this.makeid(),
        courses: [
          {
            'name': '',
            'id': '',
            'price': 0
          }
        ]
      }];
    } else {
      this.selectedUser.coupans.push({
        amount: 0,
        id: this.makeid(),
        courses: [
          {
            'name': '',
            'id': '',
            'price': 0
          }
        ]
      });
    }
  }
  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  deleteUser(user: User) {
    if (window.confirm('Are you sure you want to delete ' + user.username + '?')) {
      this.userService.deleteUser(user).subscribe(
        data => this.toast.setMessage('user deleted successfully.', 'success'),
        error => console.log(error),
        () => this.getUsers()
      );
    }
  }
  deleteCoupan(i) {
    this.selectedUser.coupans.splice(i, 1);
  }

}
