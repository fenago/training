"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var course_1 = require("./controllers/course");
var user_1 = require("./controllers/user");
var middlewares_1 = require("./middlewares");
var multer = require('multer');
var upload = multer({ dest: './client/assets/uploads' });
function setRoutes(app) {
    var router = express.Router();
    var courseCtrl = new course_1.default();
    var userCtrl = new user_1.default();
    var middleWare = new middlewares_1.default();
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
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map