import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';

import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { courseService } from './services/course.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { courseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { PublishComponent } from './admin/publish/publish.component';
import { AddSyllabusComponent } from './admin/publish/add-syllabus/add-syllabus.component';
import { AddContentComponent } from './admin/publish/add-content/add-content.component';
import { AddCourseComponent } from './admin/publish/add-course/add-course.component';
import { UnPublishedListComponent } from './admin/publish/un-published-list/un-published-list.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SafePipe } from './shared/safe.pipe';
import { ContentComponent } from './content/content.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './cloudinary.config';
import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { BlogsComponent } from './blogs/blogs.component';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { BlogDashboardComponent } from './blogs/blog-dashboard/blog-dashboard.component';
import { BlogService } from './services/blog.service';
import { UnPublishedBlogsComponent } from './blogs/un-published-blogs/un-published-blogs.component';
import { BlogReadComponent } from './blogs/blog-read/blog-read.component';

const cloudinaryLib = {
  Cloudinary: Cloudinary
};


@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    PublishComponent,
    AddSyllabusComponent,
    AddContentComponent,
    AddCourseComponent,
    UnPublishedListComponent,
    SyllabusComponent,
    SafePipe,
    ContentComponent,
    AnalyticsComponent,
    BlogsComponent,
    AddBlogComponent,
    BlogDashboardComponent,
    UnPublishedBlogsComponent,
    BlogReadComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinaryLib, cloudinaryConfiguration),
    QuillModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    courseService,
    UserService,
    BlogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
