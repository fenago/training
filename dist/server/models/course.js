"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var courseSchema = new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    eta: String,
    description: String,
    isPublished: Boolean,
    userCount: Number,
    syllabus: String,
    syllabusFile: String,
    content: {
        chapters: [{
                title: String,
                lessons: [{
                        title: String,
                        content: String,
                        contentFile: String,
                        image: String
                    }]
            }]
    }
});
var course = mongoose.model('course', courseSchema);
exports.default = course;
//# sourceMappingURL=course.js.map