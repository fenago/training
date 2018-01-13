"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var syllabusSchema = new mongoose.Schema({
    title: String,
    html: String,
    course: String
});
var syllabus = mongoose.model('syllabus', syllabusSchema);
exports.default = syllabus;
//# sourceMappingURL=syllabus.js.map