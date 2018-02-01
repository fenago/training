import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { courseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './admin/users/users.component';
import { PublishComponent } from './admin/publish/publish.component';
import { AddCourseComponent } from './admin/publish/add-course/add-course.component';
import { AddSyllabusComponent } from './admin/publish/add-syllabus/add-syllabus.component';
import { AddContentComponent } from './admin/publish/add-content/add-content.component';
import { UnPublishedListComponent } from './admin/publish/un-published-list/un-published-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'courses', component: courseComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'account/:id', component: AccountComponent, canActivate: [AuthGuardLogin, AuthGuardAdmin] },
  { path: 'syllabus/:id', component: SyllabusComponent, canActivate: [AuthGuardLogin] },
  { path: 'content/:id', component: ContentComponent, canActivate: [AuthGuardLogin] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardAdmin] },
  {
    path: 'publish', component: PublishComponent, children: [
      { path: '', component: UnPublishedListComponent },
      { path: 'new', component: AddCourseComponent },
      { path: 'new/:id', component: AddCourseComponent },
      { path: 'unPublishedList', component: UnPublishedListComponent }
    ]
  },
  // { path: 'publish', component: PublishComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
