const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose.js');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);

        // res.send('COURSE DETAIL! - ' + req.params.slug)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save()

        res.send('COURSE SAVED!')

        // res.json(req.body)
    }
}

module.exports = new CourseController();
