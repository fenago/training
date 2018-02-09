export class User {
  _id?: string;
  username?: string;
  email?: string;
  role?: string;
  coupans: [{
    id: String,
    courses: [{
      id: String,
      name: String
    }],
    amount: Number
  }];
}
