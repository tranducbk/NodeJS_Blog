const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose.js');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});

            // Sử dụng hàm mutipleMongooseToObject để chuyển đổi
            res.render('home', {
                courses: mutipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
