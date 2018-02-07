import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../../shared/toast/toast.component';
import { AuthService } from '../../services/auth.service';
import { courseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  selectedUser: User = null;
  courses = [];

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
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  coupanEdit() {

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

}
