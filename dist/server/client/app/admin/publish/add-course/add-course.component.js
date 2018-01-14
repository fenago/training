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
var course_model_1 = require("../../../shared/models/course.model");
var course_service_1 = require("../../../services/course.service");
var toast_component_1 = require("../../../shared/toast/toast.component");
var router_1 = require("@angular/router");
var AddCourseComponent = (function () {
    function AddCourseComponent(CourseService, toast, route) {
        this.CourseService = CourseService;
        this.toast = toast;
        this.route = route;
        this.course = new course_model_1.course();
        this.currentTab = 2;
    }
    AddCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (typeof (params['id']) === 'string') {
                console.log('hello');
                _this.CourseService.getcourse(params['id']).subscribe(function (res) {
                    _this.course = res;
                    console.log(res);
                });
            }
        });
    };
    /*
     * @Description: sets the file from the input to the image field in this.addCourseForm
     */
    AddCourseComponent.prototype.setImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.course.image = {
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                };
            };
        }
    };
    AddCourseComponent.prototype.submit = function () {
        var _this = this;
        if (typeof (this.course._id) === 'string') {
            this.CourseService.editcourse(this.course).subscribe(function (res) {
                console.log(res);
                _this.toast.setMessage('course edited successfully.', 'success');
            });
        }
        else {
            this.course.isPublished = false;
            this.CourseService.addcourse(this.course).subscribe(function (res) {
                console.log(res);
                _this.course = res;
                _this.currentTab = 2;
                _this.toast.setMessage('course added successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", course_model_1.course)
    ], AddCourseComponent.prototype, "course", void 0);
    AddCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-add-course',
            templateUrl: './add-course.component.html',
            styleUrls: ['./add-course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService,
            toast_component_1.ToastComponent,
            router_1.ActivatedRoute])
    ], AddCourseComponent);
    return AddCourseComponent;
}());
exports.AddCourseComponent = AddCourseComponent;
//# sourceMappingURL=add-course.component.js.map