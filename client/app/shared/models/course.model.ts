export class course {
  _id?: string;
  title?: String;
  image?: any;
  price?: Number;
  eta?: String;
  description?: String;
  isPublished?: Boolean;
  userCount?: Number;
  syllabus?: String;
  content?: {
    chapters: [{
      title: String,
      lessons: [{
        title: String,
        content: String,
        image: Object
      }]
    }]
  };
}
