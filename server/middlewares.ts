import * as bcrypt from 'bcryptjs';

import User from './models/user';

export default class MiddleWare {
  model = User;

  hash = (req, res, next) => {
    if (req.body.password) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(req.body.password, salt, function (error, hash) {
          if (error) { return next(error); }
          req.body.password = hash;
          next();
        });
      });
    }else {
      next();
    }
  }

}
