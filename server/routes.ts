import * as express from 'express';

import CourseCtrl from './controllers/course';
import UserCtrl from './controllers/user';
import course from './models/course';
import User from './models/user';
import MiddleWare from './middlewares';
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './public/uploads/title/',
  filename: function (req, file, cb) {
    cb(null, req.params.courseId + path.extname(file.originalname));
  }
});

export default function setRoutes(app) {
  const upload = multer({ storage: storage });
  const router = express.Router();

  const courseCtrl = new CourseCtrl();
  const userCtrl = new UserCtrl();
  const middleWare = new MiddleWare();

  router.route('/user/:id').put(middleWare.hash);

  // courses
  router.route('/courses').get(courseCtrl.getAll);
  router.route('/courses/count').get(courseCtrl.count);
  router.route('/course').post(courseCtrl.insert);
  router.route('/courses/shallow').get(courseCtrl.getAllShallow);
  router.route('/course/:id').get(courseCtrl.get);
  router.route('/course/:id').put(courseCtrl.update);
  router.route('/course/:id').delete(courseCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our applicourseion with the prefix /api
  app.use('/api', router);

}
