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
var course_service_1 = require("../../../services/course.service");
var toast_component_1 = require("../../../shared/toast/toast.component");
var AddContentComponent = (function () {
    function AddContentComponent(courseService, toast) {
        this.courseService = courseService;
        this.toast = toast;
        this.chapterName = 'Add title';
        this.lessonName = 'Add title';
    }
    AddContentComponent.prototype.ngOnInit = function () {
        this.options = {
            height: 300,
            fileUpload: false,
            imageUpload: false
        };
        if (!this.course.content) {
            this.course.content = {
                chapters: []
            };
        }
        console.log(this.course);
    };
    AddContentComponent.prototype.addChapter = function () {
        this.course.content.chapters.push({
            title: this.chapterName,
            lessons: []
        });
        this.chapterName = 'Add title';
    };
    AddContentComponent.prototype.addLesson = function (i) {
        this.course.content.chapters[i].lessons.push({
            title: this.lessonName,
            content: '',
            image: ''
        });
        this.lessonName = 'Add title';
    };
    AddContentComponent.prototype.removePlaceholder = function (event) {
        event.target.value = event.target.value === 'Add title' ? '' : event.target.value;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AddContentComponent.prototype, "course", void 0);
    AddContentComponent = __decorate([
        core_1.Component({
            selector: 'app-add-content',
            templateUrl: './add-content.component.html',
            styleUrls: ['./add-content.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService, toast_component_1.ToastComponent])
    ], AddContentComponent);
    return AddContentComponent;
}());
exports.AddContentComponent = AddContentComponent;
//# sourceMappingURL=add-content.component.js.map