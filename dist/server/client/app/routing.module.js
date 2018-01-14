"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_component_1 = require("./course/course.component");
var about_component_1 = require("./about/about.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var account_component_1 = require("./account/account.component");
var users_component_1 = require("./admin/users/users.component");
var publish_component_1 = require("./admin/publish/publish.component");
var add_course_component_1 = require("./admin/publish/add-course/add-course.component");
var un_published_list_component_1 = require("./admin/publish/un-published-list/un-published-list.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var not_found_component_1 = require("./not-found/not-found.component");
var auth_guard_login_service_1 = require("./services/auth-guard-login.service");
var auth_guard_admin_service_1 = require("./services/auth-guard-admin.service");
var routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'courses', component: course_component_1.courseComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'account', component: account_component_1.AccountComponent, canActivate: [auth_guard_login_service_1.AuthGuardLogin] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_login_service_1.AuthGuardLogin] },
    { path: 'users', component: users_component_1.UsersComponent, canActivate: [auth_guard_admin_service_1.AuthGuardAdmin] },
    {
        path: 'publish', component: publish_component_1.PublishComponent, children: [
            { path: '', component: un_published_list_component_1.UnPublishedListComponent },
            { path: 'new', component: add_course_component_1.AddCourseComponent },
            { path: 'new/:id', component: add_course_component_1.AddCourseComponent },
            { path: 'unPublishedList', component: un_published_list_component_1.UnPublishedListComponent }
        ]
    },
    // { path: 'publish', component: PublishComponent, canActivate: [AuthGuardAdmin] },
    { path: 'notfound', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=routing.module.js.map