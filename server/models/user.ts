import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import { isMaster } from 'cluster';

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  role: String,
  coupans: [{
    id: String,
    courses: [{
      id: String,
      name: String
    }],
    amount: Number
  }]
});

// Before saving the user, hash the password
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) { return next(error); }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  console.log(candidatePassword + '-----' + this.password);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model('User', userSchema);

export default User;
