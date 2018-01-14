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
var course_service_1 = require("../services/course.service");
var toast_component_1 = require("../shared/toast/toast.component");
var course_model_1 = require("../shared/models/course.model");
var courseComponent = (function () {
    function courseComponent(courseservice, formBuilder, toast) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.course = new course_model_1.course();
        this.courses = [];
        this.isLoading = true;
        this.isEditing = false;
    }
    courseComponent.prototype.ngOnInit = function () {
        this.getcourses();
        this.addcourseForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            eta: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            image: null
        });
    };
    courseComponent.prototype.getcourses = function () {
        var _this = this;
        this.courseservice.getcourses().subscribe(function (data) { return _this.courses = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    courseComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            this.isLoading = true;
            console.log(this.addcourseForm);
            reader.onload = function () {
                console.log(_this.addcourseForm);
                _this.addcourseForm.get('image').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                }, {
                    emitModelToViewChange: false
                });
                console.log(_this.addcourseForm);
                _this.isLoading = false;
            };
        }
    };
    courseComponent.prototype.addcourse = function () {
        var _this = this;
        console.log(this.addcourseForm.value);
        this.courseservice.addcourse(this.addcourseForm.value).subscribe(function (res) {
            _this.courses.push(res);
            _this.addcourseForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    courseComponent.prototype.enableEditing = function (course) {
        this.isEditing = true;
        this.course = course;
    };
    courseComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.course = new course_model_1.course();
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the courses to reset the editing
        this.getcourses();
    };
    courseComponent.prototype.editcourse = function (course) {
        var _this = this;
        this.courseservice.editcourse(course).subscribe(function () {
            _this.isEditing = false;
            _this.course = course;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    courseComponent.prototype.deletecourse = function (course) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.courseservice.deletecourse(course).subscribe(function () {
                var pos = _this.courses.map(function (elem) { return elem._id; }).indexOf(course._id);
                _this.courses.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    courseComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            templateUrl: './course.component.html',
            styleUrls: ['./course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService,
            forms_1.FormBuilder,
            toast_component_1.ToastComponent])
    ], courseComponent);
    return courseComponent;
}());
exports.courseComponent = courseComponent;
//# sourceMappingURL=course.component.js.map