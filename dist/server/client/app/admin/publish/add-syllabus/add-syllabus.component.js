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
var course_model_1 = require("../../../shared/models/course.model");
var toast_component_1 = require("../../../shared/toast/toast.component");
var AddSyllabusComponent = (function () {
    function AddSyllabusComponent(courseService, toast) {
        this.courseService = courseService;
        this.toast = toast;
        this.courseChange = new core_1.EventEmitter();
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.options = {
            placeHolder: 'type here...'
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", course_model_1.course)
    ], AddSyllabusComponent.prototype, "course", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddSyllabusComponent.prototype, "courseChange", void 0);
    AddSyllabusComponent = __decorate([
        core_1.Component({
            selector: 'app-add-syllabus',
            templateUrl: './add-syllabus.component.html',
            styleUrls: ['./add-syllabus.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService, toast_component_1.ToastComponent])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());
exports.AddSyllabusComponent = AddSyllabusComponent;
//# sourceMappingURL=add-syllabus.component.js.map