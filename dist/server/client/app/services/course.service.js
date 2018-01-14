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
var http_1 = require("@angular/common/http");
var courseService = (function () {
    function courseService(http) {
        this.http = http;
    }
    courseService.prototype.getcourses = function () {
        return this.http.get('/api/courses');
    };
    courseService.prototype.getcoursesShallow = function () {
        return this.http.get('/api/courses/shallow');
    };
    courseService.prototype.countcourses = function () {
        return this.http.get('/api/courses/count');
    };
    courseService.prototype.addcourse = function (data) {
        return this.http.post('/api/course', data);
    };
    courseService.prototype.uploadImage = function (file) {
        console.log(file);
        var formData = new FormData();
        formData.append('userfile', file, file.filename);
        return this.http.post('/api/course/upload', formData);
    };
    courseService.prototype.getcourse = function (courseId) {
        return this.http.get("/api/course/" + courseId);
    };
    courseService.prototype.editcourse = function (course) {
        return this.http.put("/api/course/" + course._id, course, { responseType: 'text' });
    };
    courseService.prototype.deletecourse = function (course) {
        return this.http.delete("/api/course/" + course._id, { responseType: 'text' });
    };
    courseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], courseService);
    return courseService;
}());
exports.courseService = courseService;
//# sourceMappingURL=course.service.js.map