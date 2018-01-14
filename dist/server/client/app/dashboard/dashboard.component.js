"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../services/course.service");
var toast_component_1 = require("../shared/toast/toast.component");
var course_model_1 = require("../shared/models/course.model");
var DashboardComponent = (function () {
    function DashboardComponent(courseservice, formBuilder, toast, router) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
        this.course = new course_model_1.course();
        this.courses = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.age = new forms_1.FormControl('', forms_1.Validators.required);
        this.weight = new forms_1.FormControl('', forms_1.Validators.required);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getcourses();
        this.addcourseForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    DashboardComponent.prototype.getcourses = function () {
        var _this = this;
        this.courseservice.getcourses().subscribe(function (data) {
            _this.courses = data;
            console.log(data);
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    DashboardComponent.prototype.deletecourse = function (course) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.courseservice.deletecourse(course).subscribe(function () {
                var pos = _this.courses.map(function (elem) { return elem._id; }).indexOf(course._id);
                _this.courses.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService,
            forms_1.FormBuilder,
            toast_component_1.ToastComponent,
            router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map