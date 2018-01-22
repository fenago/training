import * as mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  eta: String,
  description: String,
  isPublished: Boolean,
  userCount: Number,
  syllabus: String,
  users: [String],
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

const course = mongoose.model('course', courseSchema);

export default course;
