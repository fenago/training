export class blog {
  _id?: string;
  title?: String;
  image?: String;
  author?: {
    id: String,
    username: String,
    email: String
  };
  date?: String;
  content?: String;
  description?: String;
  isPublished?: Boolean;
}
