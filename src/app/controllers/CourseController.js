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
    async store(req, res) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
            const course = new Course(formData);
            await course.save();
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }

    //[GET] /courses/:id/edit
    async edit(req, res) {
        const course = await Course.findById(req.params.id).lean()
        res.render('courses/edit', {course});
    }

    //[PUT] /courses/:id
    async update(req, res){
        await Course.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/me/stored/courses`)
    }
}

module.exports = new CourseController();
