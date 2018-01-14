"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_module_1 = require("./material.module");
var ng2_file_upload_1 = require("ng2-file-upload");
var angular_froala_wysiwyg_1 = require("angular-froala-wysiwyg");
var ngx_quill_editor_1 = require("ngx-quill-editor");
var routing_module_1 = require("./routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var shared_module_1 = require("./shared/shared.module");
var course_service_1 = require("./services/course.service");
var user_service_1 = require("./services/user.service");
var auth_service_1 = require("./services/auth.service");
var auth_guard_login_service_1 = require("./services/auth-guard-login.service");
var auth_guard_admin_service_1 = require("./services/auth-guard-admin.service");
var app_component_1 = require("./app.component");
var course_component_1 = require("./course/course.component");
var about_component_1 = require("./about/about.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var account_component_1 = require("./account/account.component");
var not_found_component_1 = require("./not-found/not-found.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var users_component_1 = require("./admin/users/users.component");
var publish_component_1 = require("./admin/publish/publish.component");
var add_syllabus_component_1 = require("./admin/publish/add-syllabus/add-syllabus.component");
var add_content_component_1 = require("./admin/publish/add-content/add-content.component");
var add_course_component_1 = require("./admin/publish/add-course/add-course.component");
var un_published_list_component_1 = require("./admin/publish/un-published-list/un-published-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                course_component_1.courseComponent,
                about_component_1.AboutComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                account_component_1.AccountComponent,
                not_found_component_1.NotFoundComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                users_component_1.UsersComponent,
                publish_component_1.PublishComponent,
                add_syllabus_component_1.AddSyllabusComponent,
                add_content_component_1.AddContentComponent,
                add_course_component_1.AddCourseComponent,
                un_published_list_component_1.UnPublishedListComponent
            ],
            imports: [
                routing_module_1.RoutingModule,
                shared_module_1.SharedModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                ng2_file_upload_1.FileUploadModule,
                angular_froala_wysiwyg_1.FroalaEditorModule.forRoot(),
                angular_froala_wysiwyg_1.FroalaViewModule.forRoot(),
                ngx_quill_editor_1.QuillEditorModule
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_login_service_1.AuthGuardLogin,
                auth_guard_admin_service_1.AuthGuardAdmin,
                course_service_1.courseService,
                user_service_1.UserService
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map