
import BaseCtrl from './base';
import course from '../models/course';
const multer = require('multer');
const fs = require('fs');


export default class CourseCtrl extends BaseCtrl {
  model = course;
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      // if (!fs.existsSync(dir + item._id)) {
      //   fs.mkdirSync(dir + item._id);
      // }
      res.status(200).json(item);
    });
  }

  getAllShallow = (req, res) => {
    this.model.find({ isPublished: false }, {syllabus: 0, content: 0 }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  // uploadImage = (req, res) => {
  //   const upload = multer({ storage: storage }).single('userPhoto');
  //   upload(req, res, function (err) {
  //     console.log(req.file);
  //     if (err) {
  //       res.json({ success: false, message: err });
  //     } else {
  //       res.json({ success: true, message: 'Photo was updated !' });
  //     }
  //   });
  // }
}
