webpackJsonp(["main"],{

/***/ "../../../../../client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n  margin: 0 auto;\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height/screen add the attributes: data-toggle=\"full-height\" data-offset=\"#header\" -->\r\n  <div class=\"bg-white overlay overlay-primary text-center px-3 py-5 py-lg-10 flex-valign\"\r\n    data-css='{\"background-position\": \"center bottom\",\"background-attachment\": \"fixed\"}' >\r\n    <div class=\"center\"> <h1>Trainer </h1>\r\n      <h3>courses for you</h3>\r\n    </div>\r\n  </div>\r\n\r\n<div id=\"features\" class=\"container py-4 py-lg-6\">\r\n    <hr class=\"hr-lg mt-0 mb-3 w-10 mx-auto hr-primary\" />\r\n    <h2 class=\"text-center text-uppercase font-weight-bold my-0\">\r\n      What you will learn\r\n    </h2>\r\n    <hr class=\"mb-5 w-50 mx-auto\" />\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-lg-4 py-2\">\r\n        <i class=\"fa fa-tachometer icon-5x text-primary\" data-animate=\"fadeIn\" data-animate-delay=\"0.1\"></i>\r\n        <h4 class=\"mt-2\">\r\n          Fully Optimized\r\n        </h4>\r\n        <p>Fere incassum nostrud praemitto singularis. Accumsan interdico nulla pagus roto typicus vicis.</p>\r\n      </div>\r\n      <div class=\"col-lg-4 py-2\">\r\n        <i class=\"fa fa-wrench icon-5x text-primary\" data-animate=\"fadeIn\" data-animate-delay=\"0.2\"></i>\r\n        <h4 class=\"mt-2\">\r\n          Free Support\r\n        </h4>\r\n        <p>Caecus facilisis genitus iaceo olim paulatim quia quis roto.</p>\r\n      </div>\r\n      <div class=\"col-lg-4 py-2\">\r\n        <i class=\"fa fa-rocket icon-5x text-primary\" data-animate=\"fadeIn\" data-animate-delay=\"0.3\"></i>\r\n        <h4 class=\"mt-2\">\r\n          Free Upgrades\r\n        </h4>\r\n        <p>Abigo diam exerci si tation. Camur commoveo enim praesent quadrum roto volutpat.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../client/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../client/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../client/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\r\n  background-color: white;\r\n  border-radius: 2px 2px 2px 2px;\r\n  margin-top:8%;\r\n  padding: 30px 30px 30px 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\r\n\r\n<app-toast [message]=\"toast.message\"></app-toast>\r\n\r\n<div class=\"content\" *ngIf=\"!isLoading\">\r\n  <div class=\"card-block\">\r\n    <form #accountForm=\"ngForm\" class=\"form-login form-wrapper form-narrow\" (ngSubmit)=\"save(user)\">\r\n      <div class=\"form-group\">\r\n        <span class=\"input-group-addon\">\r\n          <i class=\"fa fa-user\"></i> username</span>\r\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <span class=\"input-group-addon\">\r\n          <i class=\"fa fa-envelope\"></i> Email</span>\r\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\r\n        <i class=\"fa fa-save\"></i> Save\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../client/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../client/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/publish/add-content/add-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".course-form{\r\n  width:98%;\r\n  height: 90%;\r\n  margin-top:2%;\r\n  margin-left:1%;\r\n  padding: 30px 30px 30px 30px;\r\n  background-color: white;\r\n  border-radius:5px 5px 5px 5px;\r\n  box-shadow: -4px 25px 38px 4px rgba(7,125,133,1);\r\n}\r\n.row{\r\n  width:100%;\r\n}\r\n\r\n.col{\r\n  width:50%;\r\n}\r\n.chaptersList{\r\n  width: 10%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-content/add-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"course-form\" aria-label=\"syllabus\">\r\n  <legend>chapters</legend>\r\n  <br>\r\n  <mat-tab-group>\r\n    <mat-tab *ngFor=\"let chapter of course.content.chapters; let i = index\">\r\n      <ng-template mat-tab-label>\r\n        {{i+1}}-\r\n        <input matInput [(ngModel)]=\"chapter.title\">\r\n      </ng-template>\r\n      <legend>lessons</legend>\r\n      <mat-tab-group>\r\n\r\n        <mat-tab *ngFor=\"let lesson of chapter.lessons; let j = index\">\r\n          <ng-template mat-tab-label>\r\n            {{i+1}}.{{j+1}}-\r\n            <input matInput [(ngModel)]=\"lesson.title\">\r\n          </ng-template>\r\n          <div [froalaEditor]=\"options\" [(froalaModel)]=\"lesson.content\">Hello, Froala!</div>\r\n          <input type=\"file\">\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n              <input matInput (focus)=\"removePlaceholder($event)\" [(ngModel)]=\"lessonName\"  />\r\n              <button class=\"btn\" (click)=\"addLesson(i)\"><i class=\"fa fa-plus\"></i></button>\r\n          </ng-template>\r\n        </mat-tab>\r\n\r\n      </mat-tab-group>\r\n    </mat-tab>\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n          <input matInput (focus)=\"removePlaceholder($event)\" [(ngModel)]=\"chapterName\"/>\r\n        <button class=\"btn\" (click)=\"addChapter()\">\r\n            <i class=\"fa fa-plus\"></i>\r\n          </button>\r\n      </ng-template>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-content/add-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddContentComponent.prototype, "course", void 0);
    AddContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-content',
            template: __webpack_require__("../../../../../client/app/admin/publish/add-content/add-content.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/publish/add-content/add-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_course_service__["a" /* courseService */], __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */]])
    ], AddContentComponent);
    return AddContentComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/publish/add-course/add-course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".course-form{\r\n  width:90%;\r\n  height: 90%;\r\n  margin-top:2%;\r\n  margin-left:5%;\r\n  padding: 50px 50px 50px 50px;\r\n  background-color: white;\r\n  border-radius:5px 5px 5px 5px;\r\n  box-shadow: -4px 25px 38px 4px rgba(7,125,133,1);\r\n}\r\n.row{\r\n  width:100%;\r\n}\r\n\r\n.col{\r\n  width:50%;\r\n}\r\n.submit{\r\n  margin-left: 90%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-course/add-course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content colored\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"course\" [selectedIndex]=\"currentTab\">\r\n      <div class=\"course-form\">\r\n        <legend>Course details</legend>\r\n        <mat-form-field class=\"row\">\r\n          <textarea matInput [(ngModel)]=\"course.title\" placeholder=\"Title\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"row\">\r\n          <input matInput type=\"number\" [(ngModel)]=\"course.price\" placeholder=\"Price\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"row\">\r\n          <input matInput type=\"number\" [(ngModel)]=\"course.eta\" placeholder=\"Estimated time\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"row\">\r\n          <textarea matInput [(ngModel)]=\"course.description\" placeholder=\"Description\"></textarea>\r\n        </mat-form-field>\r\n        <div class=\"row\">\r\n          <label>cover photo</label>\r\n          <input type=\"file\" (change)=\"setImage($event)\">\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"syllabus\">\r\n      <app-add-syllabus [course]=\"course\" ></app-add-syllabus>\r\n    </mat-tab>\r\n    <mat-tab label=\"content\">\r\n      <div><app-add-content [course]=\"course\" ></app-add-content></div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n  <button class=\"submit btn btn-success\" (click)=\"submit()\">submit</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-course/add-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCourseComponent = (function () {
    function AddCourseComponent(CourseService, toast, route) {
        this.CourseService = CourseService;
        this.toast = toast;
        this.route = route;
        this.course = new __WEBPACK_IMPORTED_MODULE_1__shared_models_course_model__["a" /* course */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_course_model__["a" /* course */])
    ], AddCourseComponent.prototype, "course", void 0);
    AddCourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-course',
            template: __webpack_require__("../../../../../client/app/admin/publish/add-course/add-course.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/publish/add-course/add-course.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_course_service__["a" /* courseService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], AddCourseComponent);
    return AddCourseComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".course-form{\r\n  width:90%;\r\n  height: 90%;\r\n  margin-top:2%;\r\n  margin-left:5%;\r\n  padding: 50px 50px 50px 50px;\r\n  background-color: white;\r\n  border-radius:5px 5px 5px 5px;\r\n  box-shadow: -4px 25px 38px 4px rgba(7,125,133,1);\r\n}\r\n.content{\r\n  border:solid #00ADBB;\r\n}\r\n.row{\r\n  width:100%;\r\n}\r\n\r\n.col{\r\n  width:50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"course-form\" aria-label=\"syllabus\">\r\n  <div class=\"row\">\r\n    <legend> Syllabus </legend>\r\n      <div [froalaEditor]=\"options\" [(froalaModel)]=\"course.syllabus\">Hello, Froala!</div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSyllabusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSyllabusComponent = (function () {
    function AddSyllabusComponent(courseService, toast) {
        this.courseService = courseService;
        this.toast = toast;
        this.courseChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.options = {
            height: 300,
            fileUpload: false,
            imageUpload: false
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_course_model__["a" /* course */])
    ], AddSyllabusComponent.prototype, "course", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddSyllabusComponent.prototype, "courseChange", void 0);
    AddSyllabusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-syllabus',
            template: __webpack_require__("../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_course_service__["a" /* courseService */], __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/publish/publish.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/publish/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\r\n\r\n<app-toast [message]=\"toast.message\"></app-toast>\r\n<nav class=\"navbar navbar-dark bg-primary\" mat-tab-nav-bar>\r\n  <div class=\"nav navbar-nav\">\r\n    <a routerLink=\"/publish/new\" class=\"nav-item nav-link\" mat-tab-link  routerLinkActive=\"active\">\r\n      <i class=\"fa fa-plus\"></i> Add\r\n    </a>\r\n    <a routerLink=\"/publish/unPublishedList\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\r\n      <i class=\"fa fa-list\"></i> un-published list\r\n    </a>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/publish/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublishComponent = (function () {
    function PublishComponent(courseservice, formBuilder, toast) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.course = new __WEBPACK_IMPORTED_MODULE_4__shared_models_course_model__["a" /* course */]();
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.course._id = 'test';
    };
    PublishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publish',
            template: __webpack_require__("../../../../../client/app/admin/publish/publish.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/publish/publish.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_course_service__["a" /* courseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]])
    ], PublishComponent);
    return PublishComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/publish/un-published-list/un-published-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/publish/un-published-list/un-published-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"!isLoading\">\r\n  <h4 class=\"card-header\">{{course._id}}</h4>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead class=\"thead-default\">\r\n        <tr>\r\n          <th>image</th>\r\n          <th>Title</th>\r\n          <th>price</th>\r\n          <th>ETA</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"courses.length === 0\">\r\n        <tr>\r\n          <td colspan=\"4\">There are no courses in the DB. Add a new course below.</td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"!isEditing\">\r\n        <tr *ngFor=\"let course of courses\">\r\n          <td>\r\n            <img *ngIf=\"course.image\" src=\"data:{{course.image.filetype}};base64,{{course.image.value}}\">\r\n          </td>\r\n          <td>{{course.title}}</td>\r\n          <td>{{course.price}}</td>\r\n          <td>{{course.eta}}</td>\r\n          <td>\r\n              <button class=\"btn btn-sm btn-primary\" (click)=\"publish(course)\">\r\n                  <i class=\"fa fa-check\"></i> publish\r\n                </button>\r\n            <button class=\"btn btn-sm btn-warning\">\r\n              <i class=\"fa fa-pencil\"></i>\r\n              <a [routerLink]=\"['/publish/new', course._id]\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\r\n                Edit\r\n              </a>\r\n            </button>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deletecourse(course)\">\r\n              <i class=\"fa fa-trash\"></i> Delete</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/publish/un-published-list/un-published-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnPublishedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnPublishedListComponent = (function () {
    function UnPublishedListComponent(courseservice, formBuilder, toast, router) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
        this.course = new __WEBPACK_IMPORTED_MODULE_5__shared_models_course_model__["a" /* course */]();
        this.courses = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
    }
    UnPublishedListComponent.prototype.ngOnInit = function () {
        this.getcourses();
        this.addcourseForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    UnPublishedListComponent.prototype.getcourses = function () {
        var _this = this;
        this.courseservice.getcoursesShallow().subscribe(function (data) {
            _this.courses = data;
            console.log(data);
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    UnPublishedListComponent.prototype.publish = function (course) {
        var _this = this;
        this.courseservice.getcourse(course._id).subscribe(function (response) {
            response.isPublished = true;
            _this.courseservice.editcourse(response).subscribe(function (res) {
                console.log(res);
                _this.getcourses();
            });
        });
    };
    UnPublishedListComponent.prototype.deletecourse = function (course) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.courseservice.deletecourse(course).subscribe(function () {
                var pos = _this.courses.map(function (elem) { return elem._id; }).indexOf(course._id);
                _this.courses.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UnPublishedListComponent.prototype, "course", void 0);
    UnPublishedListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-un-published-list',
            template: __webpack_require__("../../../../../client/app/admin/publish/un-published-list/un-published-list.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/publish/un-published-list/un-published-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_course_service__["a" /* courseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UnPublishedListComponent);
    return UnPublishedListComponent;
}());



/***/ }),

/***/ "../../../../../client/app/admin/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\r\n\r\n<app-toast [message]=\"toast.message\"></app-toast>\r\n\r\n<div class=\"card\" *ngIf=\"!isLoading\">\r\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead class=\"thead-default\">\r\n        <tr>\r\n          <th>Username</th>\r\n          <th>Email</th>\r\n          <th>Role</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"users.length === 0\">\r\n        <tr>\r\n          <td colspan=\"4\">There are no registered users.</td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users\">\r\n          <td>{{user.username}}</td>\r\n          <td>{{user.email}}</td>\r\n          <td>{{user.role}}</td>\r\n          <td>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = (function () {
    function UsersComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete ' + user.username + '?')) {
            this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../client/app/admin/users/users.component.html"),
            styles: [__webpack_require__("../../../../../client/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../client/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_module__ = __webpack_require__("../../../../../client/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__course_course_component__ = __webpack_require__("../../../../../client/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_header_component__ = __webpack_require__("../../../../../client/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__ = __webpack_require__("../../../../../client/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_component__ = __webpack_require__("../../../../../client/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_users_users_component__ = __webpack_require__("../../../../../client/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_publish_publish_component__ = __webpack_require__("../../../../../client/app/admin/publish/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_publish_add_syllabus_add_syllabus_component__ = __webpack_require__("../../../../../client/app/admin/publish/add-syllabus/add-syllabus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_publish_add_content_add_content_component__ = __webpack_require__("../../../../../client/app/admin/publish/add-content/add-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_publish_add_course_add_course_component__ = __webpack_require__("../../../../../client/app/admin/publish/add-course/add-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_publish_un_published_list_un_published_list_component__ = __webpack_require__("../../../../../client/app/admin/publish/un-published-list/un-published-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__course_course_component__["a" /* courseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_20__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__admin_publish_publish_component__["a" /* PublishComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_publish_add_syllabus_add_syllabus_component__["a" /* AddSyllabusComponent */],
                __WEBPACK_IMPORTED_MODULE_26__admin_publish_add_content_add_content_component__["a" /* AddContentComponent */],
                __WEBPACK_IMPORTED_MODULE_27__admin_publish_add_course_add_course_component__["a" /* AddCourseComponent */],
                __WEBPACK_IMPORTED_MODULE_28__admin_publish_un_published_list_un_published_list_component__["a" /* UnPublishedListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
                __WEBPACK_IMPORTED_MODULE_7__services_course_service__["a" /* courseService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../client/app/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td,\r\n.table th {\r\n  text-align: center;\r\n  width: 25%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\r\n\r\n<app-toast [message]=\"toast.message\"></app-toast>\r\n\r\n<div class=\"card\" *ngIf=\"!isLoading\">\r\n  <h4 class=\"card-header\">Current courses ({{courses.length}})</h4>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead class=\"thead-default\">\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Age</th>\r\n          <th>Weight</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"courses.length === 0\">\r\n        <tr>\r\n          <td colspan=\"4\">There are no courses in the DB. Add a new course below.</td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"!isEditing\">\r\n        <tr *ngFor=\"let course of courses\">\r\n          <td>{{course.name}}</td>\r\n          <td>{{course.age}}</td>\r\n          <td>{{course.weight}}</td>\r\n          <td>\r\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(course)\">\r\n              <i class=\"fa fa-pencil\"></i> Edit</button>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deletecourse(course)\">\r\n              <i class=\"fa fa-trash\"></i> Delete</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"isEditing\">\r\n        <tr>\r\n          <td colspan=\"4\">\r\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editcourse(course)\" style=\"display:inline\">\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"course.name\" placeholder=\"Name\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"course.age\" placeholder=\"Age\" min=\"0\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"course.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\"\r\n                  required>\r\n              </div>\r\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\">\r\n                <i class=\"fa fa-floppy-o\"></i> Save</button>\r\n            </form>\r\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\">\r\n              <i class=\"fa fa-times\"></i> Cancel</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf=\"!isEditing\">\r\n  <h4 class=\"card-header\">Add new course</h4>\r\n  <div class=\"card-block\">\r\n    <form class=\"form-inline\" [formGroup]=\"addcourseForm\" (ngSubmit)=\"addcourse()\" style=\"text-align:center\">\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"text\" name=\"title\" formControlName=\"title\" placeholder=\"Title\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"number\" name=\"price\" formControlName=\"price\" placeholder=\"price\" min=\"0\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"number\" name=\"eta\" formControlName=\"eta\" placeholder=\"eta\" step=\"any\" min=\"0\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"text\" name=\"description\" formControlName=\"description\" placeholder=\"description\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" type=\"file\" name=\"image\" (change)=\"onFileChange($event)\" formControlName=\"image\">\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addcourseForm.valid\">\r\n        <i class=\"fa fa-floppy-o\"></i> Add</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var courseComponent = (function () {
    function courseComponent(courseservice, formBuilder, toast) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.course = new __WEBPACK_IMPORTED_MODULE_4__shared_models_course_model__["a" /* course */]();
        this.courses = [];
        this.isLoading = true;
        this.isEditing = false;
    }
    courseComponent.prototype.ngOnInit = function () {
        this.getcourses();
        this.addcourseForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            eta: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
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
        this.course = new __WEBPACK_IMPORTED_MODULE_4__shared_models_course_model__["a" /* course */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../client/app/course/course.component.html"),
            styles: [__webpack_require__("../../../../../client/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_course_service__["a" /* courseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]])
    ], courseComponent);
    return courseComponent;
}());



/***/ }),

/***/ "../../../../../client/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"!isLoading\">\r\n  <h4 class=\"card-header\">{{course._id}}</h4>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead class=\"thead-default\">\r\n        <tr>\r\n          <th>image</th>\r\n          <th>Title</th>\r\n          <th>price</th>\r\n          <th>ETA</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"courses.length === 0\">\r\n        <tr>\r\n          <td colspan=\"4\">There are no courses in the DB. Add a new course below.</td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"!isEditing\">\r\n        <tr *ngFor=\"let course of courses\">\r\n          <td>\r\n            <img *ngIf=\"course.image\" src=\"data:{{course.image.filetype}};base64,{{course.image.value}}\">\r\n          </td>\r\n          <td>{{course.title}}</td>\r\n          <td>{{course.price}}</td>\r\n          <td>{{course.eta}}</td>\r\n          <td>\r\n            <button class=\"btn btn-sm btn-warning\">\r\n              <i class=\"fa fa-pencil\"></i>\r\n              <a [routerLink]=\"['/publish/new', course._id]\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\r\n                Edit\r\n              </a>\r\n            </button>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deletecourse(course)\">\r\n              <i class=\"fa fa-trash\"></i> Delete</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_course_service__ = __webpack_require__("../../../../../client/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_course_model__ = __webpack_require__("../../../../../client/app/shared/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(courseservice, formBuilder, toast, router) {
        this.courseservice = courseservice;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
        this.course = new __WEBPACK_IMPORTED_MODULE_5__shared_models_course_model__["a" /* course */]();
        this.courses = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../client/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../client/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_course_service__["a" /* courseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../client/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer{\r\n  position: inherit;\r\n   bottom:0;\r\n   width:100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"py-3\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <!--@todo: replace with company copyright details-->\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-0 text-sm\">Copyright 2018 &copy; Trainer.</p>\r\n          <ul class=\"list-inline footer-links mb-0 text-sm\">\r\n            <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">Contact Us</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-6 flex-valign\">\r\n          <div class=\"float-md-right ml-md-auto\">\r\n            <!--@todo: replace with company social media details-->\r\n            <a href=\"#\" class=\"btn btn-sm btn-icon btn-dark btn-rounded\"><i class=\"fa fa-twitter\"></i></a>\r\n            <a href=\"#\" class=\"btn btn-sm btn-icon btn-dark btn-rounded\"><i class=\"fa fa-facebook\"></i></a>\r\n            <a href=\"#\" class=\"btn btn-sm btn-icon btn-dark btn-rounded\"><i class=\"fa fa-linkedin\"></i></a>\r\n            <a href=\"#\" class=\"btn btn-sm btn-icon btn-dark btn-rounded\"><i class=\"fa fa-google-plus\"></i></a>\r\n            <a href=\"#top\" class=\"btn btn-sm btn-icon btn-dark btn-rounded\" title=\"Back to top\"><i class=\"fa fa-chevron-up\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../client/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../client/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../client/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n\r\n    <div data-toggle=\"sticky\">\r\n      <!--Header & Branding region-->\r\n      <div class=\"header header-dark bg-primary\">\r\n        <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.htm) All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm) Use .header-block to stack elements within on small screen & \"float\" on larger screens use .order-first or/and .order-last classes to make an element show first or last within .header-inner or .headr-block elements -->\r\n        <div class=\"header-inner container\">\r\n          <!--branding/logo -->\r\n          <div class=\"header-brand\">\r\n            <a class=\"header-brand-text\" href=\"index.html\" title=\"Home\">\r\n              <h1 class=\"h2\">\r\n                <span class=\"header-brand-text-alt\">Trainer</span><span class=\"header-brand-text-alt\">.</span>\r\n              </h1>\r\n            </a>\r\n          </div>\r\n          <!-- other header content -->\r\n          <div class=\"header-block order-12\">\r\n\r\n\r\n            <!-- mobile collapse menu button - data-toggle=\"collapse\" = default BS menu - data-toggle=\"jpanel-menu\" = jPanel Menu - data-toggle=\"overlay\" = Overlay Menu -->\r\n            <!-- <a href=\"#top\" class=\"btn btn-link text-white btn-sm btn-icon header-btn float-right d-lg-none\" data-toggle=\"jpanel-menu\" data-target=\".navbar-main\" data-direction=\"right\"> <i class=\"fa fa-bars\"></i> </a> -->\r\n          </div>\r\n\r\n          <nav class=\"navbar navbar-dark bg-primary\" mat-tab-nav-bar>\r\n              <div class=\"nav navbar-nav\">\r\n                <a routerLink=\"/\" class=\"nav-item nav-link\" mat-tab-link *ngIf=\"!auth.isAdmin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <i class=\"fa fa-home\"></i> About\r\n                </a>\r\n                <!-- <a routerLink=\"/cats\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\r\n                  <i class=\"fa fa-list\"></i> Cats\r\n                </a> -->\r\n                <a routerLink=\"/dashboard\" mat-tab-link class=\"nav-item nav-link\" *ngIf=\"auth.loggedIn\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <i class=\"fa fa-book\"></i> Dashboard\r\n                </a>\r\n                <a routerLink=\"/publish\" mat-tab-link class=\"nav-item nav-link\" *ngIf=\"auth.loggedIn\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <i class=\"fa fa-upload\"></i> Publish\r\n                </a>\r\n                <a routerLink=\"/login\" mat-tab-link class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\r\n                  <i class=\"fa fa-sign-in\"></i> Logins\r\n                </a>\r\n                <a routerLink=\"/register\"  mat-tab-link class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\r\n                  <i class=\"fa fa-user-plus\"></i> Register\r\n                </a>\r\n                <a routerLink=\"/account\" mat-tab-link class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\r\n                  <i class=\"fa fa-user\"></i> Profile\r\n                </a>\r\n                <a routerLink=\"/users\" mat-tab-link class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\r\n                  <i class=\"fa fa-group\"></i> users\r\n                </a>\r\n                <a routerLink=\"/logout\" mat-tab-link class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\r\n                  <i class=\"fa fa-sign-out\"></i> Logout\r\n                </a>\r\n              </div>\r\n            </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../client/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../client/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../client/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../client/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\r\n  background-color: white;\r\n  border-radius: 2px 2px 2px 2px;\r\n  margin-top: 10%;\r\n  padding: 30px 30px 30px 30px;\r\n}\r\n.text{\r\n  text-align: center;\r\n}\r\n.btn{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\">\r\n</app-toast>\r\n<div class=\"content colored\">\r\n  <div>\r\n    <!-- Login form -->\r\n    <form class=\"form form-login form-wrapper form-narrow\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n        <h3 class=\"text\">Login</h3>\r\n        <br>\r\n      <div class=\"form-group\" [ngClass]=\"setClassEmail()\">\r\n        <label class=\"sr-only\" for=\"login-email-page\">Email</label>\r\n        <input type=\"email\" id=\"login-email-page\" class=\"form-control email\" formControlName=\"email\" placeholder=\"Email\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"setClassPassword()\">\r\n        <label class=\"sr-only\" for=\"login-password-page\" [ngClass]=\"setClassPassword()\">Password</label>\r\n        <input type=\"password\" id=\"login-password-page\" class=\"form-control password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(100)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/dashboard']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../client/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../client/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../client/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header\">404 Not Found</h4>\r\n  <div class=\"card-block\">\r\n    <p>The page you requested was not found.</p>\r\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../client/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\r\n  background-color: white;\r\n  border-radius: 2px 2px 2px 2px;\r\n  margin-top:10%;\r\n  padding: 30px 30px 30px 30px;\r\n}\r\n#content{\r\n  background-color: #00ADBB;\r\n  height: 100%;\r\n}\r\n.text{\r\n  text-align: center;\r\n}\r\n.btn{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\r\n<div id=\"content\">\r\n  <div class=\"container\">\r\n    <!-- signup form -->\r\n    <form class=\"form-login form-wrapper form-narrow\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n      <h3 class=\"text\">Signup</h3>\r\n      <br>\r\n      <div class=\"form-group\" [ngClass]=\"setClassUsername()\">\r\n          <label class=\"sr-only\" for=\"login-email-page\">Username</label>\r\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"setClassEmail()\">\r\n        <label class=\"sr-only\" for=\"login-email-page\">Email</label>\r\n        <input type=\"email\" id=\"login-email-page\" class=\"form-control email\" formControlName=\"email\" placeholder=\"Email\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"setClassPassword()\">\r\n        <label class=\"sr-only\" for=\"login-password-page\" [ngClass]=\"setClassPassword()\">Password</label>\r\n        <input type=\"password\" id=\"login-password-page\" class=\"form-control password\" name=\"password\" formControlName=\"password\"\r\n          placeholder=\"Password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">signup</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('[a-zA-Z0-9_-\\s]*')
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(100)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)
        ]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../client/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../client/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_course_component__ = __webpack_require__("../../../../../client/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_users_users_component__ = __webpack_require__("../../../../../client/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_publish_publish_component__ = __webpack_require__("../../../../../client/app/admin/publish/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_publish_add_course_add_course_component__ = __webpack_require__("../../../../../client/app/admin/publish/add-course/add-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_publish_un_published_list_un_published_list_component__ = __webpack_require__("../../../../../client/app/admin/publish/un-published-list/un-published-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../client/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_2__course_course_component__["a" /* courseComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__admin_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    {
        path: 'publish', component: __WEBPACK_IMPORTED_MODULE_9__admin_publish_publish_component__["a" /* PublishComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__admin_publish_un_published_list_un_published_list_component__["a" /* UnPublishedListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_10__admin_publish_add_course_add_course_component__["a" /* AddCourseComponent */] },
            { path: 'new/:id', component: __WEBPACK_IMPORTED_MODULE_10__admin_publish_add_course_add_course_component__["a" /* AddCourseComponent */] },
            { path: 'unPublishedList', component: __WEBPACK_IMPORTED_MODULE_11__admin_publish_un_published_list_un_published_list_component__["a" /* UnPublishedListComponent */] }
        ]
    },
    // { path: 'publish', component: PublishComponent, canActivate: [AuthGuardAdmin] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/notfound' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    AuthGuardAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());



/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    AuthGuardLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardLogin);
    return AuthGuardLogin;
}());



/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_user_model__ = __webpack_require__("../../../../../client/app/shared/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__shared_models_user_model__["a" /* User */]();
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__shared_models_user_model__["a" /* User */]();
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        if (decodedUser) {
            this.loggedIn = true;
            this.currentUser._id = decodedUser._id;
            this.currentUser.username = decodedUser.username;
            this.currentUser.role = decodedUser.role;
            decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
            delete decodedUser.role;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../client/app/services/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], courseService);
    return courseService;
}());



/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', user);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', credentials);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count');
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', user);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id);
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, user, { responseType: 'text' });
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, { responseType: 'text' });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\r\n  <h4 class=\"card-header\">Loading...</h4>\r\n  <div class=\"card-block text-xs-center\">\r\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "condition", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html")
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../client/app/shared/models/course.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return course; });
var course = (function () {
    function course() {
    }
    return course;
}());



/***/ }),

/***/ "../../../../../client/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            exports: [
                // Shared Modules
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                // Shared Components
                __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
                __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
                __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n  bottom: 15px;\r\n  left: 25%;\r\n  opacity: .9;\r\n  position: fixed;\r\n  width: 50%;\r\n  z-index: 999;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  <strong>Message:</strong> {{message.body}}\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "message", void 0);
    ToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
            styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.css")]
        })
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map