"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var course_1 = require("../models/course");
var multer = require('multer');
var fs = require('fs');
var CourseCtrl = (function (_super) {
    __extends(CourseCtrl, _super);
    function CourseCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = course_1.default;
        _this.insert = function (req, res) {
            var obj = new _this.model(req.body);
            obj.save(function (err, item) {
                // 11000 is the code for duplicate key error
                if (err && err.code === 11000) {
                    res.sendStatus(400);
                }
                if (err) {
                    return console.error(err);
                }
                // if (!fs.existsSync(dir + item._id)) {
                //   fs.mkdirSync(dir + item._id);
                // }
                res.status(200).json(item);
            });
        };
        _this.getAllShallow = function (req, res) {
            _this.model.find({ isPublished: false }, { syllabus: 0, content: 0 }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        return _this;
        // uploadImage = (req, res) => {
        //   const upload = multer({ storage: storage }).single('userPhoto');
        //   upload(req, res, function (err) {
        //     console.log(req.file);
        //     if (err) {
        //       res.json({ success: false, message: err });
        //     } else {
        //       res.json({ success: true, message: 'Photo was updated !' });
        //     }
        //   });
        // }
    }
    return CourseCtrl;
}(base_1.default));
exports.default = CourseCtrl;
//# sourceMappingURL=course.js.map