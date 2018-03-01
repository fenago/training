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
  coupons?: [
    {
      id: String,
      amount: number
    }
  ];
  content?: {
    chapters: [{
      title: String,
      isPreview: Boolean,
      resources: [String],
      lessons: [{
        title: String,
        content: String,
        contentFile: String,
        image: Object
      }]
    }]
  };
}
