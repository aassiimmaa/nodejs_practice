const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    async show(req, res) {
        const course = await Course.findOne({ slug: req.params.slug }).lean();
        res.render('courses/show', { course });
    }

    //[GET] /courses/create
    create(req, res) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res) {
        res.json(req.body);
    }
}

module.exports = new CourseController();
