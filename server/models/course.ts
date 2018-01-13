import * as mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  image: Object,
  price: Number,
  eta: String,
  description: String,
  isPublished: Boolean,
  userCount: Number,
  syllabus: String,
  content: {
    chapters : [{
      title: String,
      lessons: [{
        title: String,
        content: String,
        image : Object
      }]
    }]
  }
});

const course = mongoose.model('course', courseSchema);

export default course;
