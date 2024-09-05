const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    async show(req, res){
        const course = await Course.findOne({ slug: req.params.slug }).lean();
        res.render('courses/show', { course });
    }

    //[GET] /courses/create
    create(req, res) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    async store(req, res) {
        try {
            const formData = req.body
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
            const course = new Course(formData)
            await course.save()
            res.redirect('/')
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }
}

module.exports = new CourseController();
