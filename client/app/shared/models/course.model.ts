export class course {
  _id?: string;
  title?: String;
  image?: any;
  price?: number;
  eta?: String;
  description?: String;
  isPublished?: Boolean;
  userCount?: number;
  users?: [String];
  syllabus?: String;
  syllabusFile?: String;
  content?: {
    chapters: [{
      title: String,
      lessons: [{
        title: String,
        content: String,
        contentFile: String,
        image: Object
      }]
    }]
  };
}
