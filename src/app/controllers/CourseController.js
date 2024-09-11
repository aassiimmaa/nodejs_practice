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
        try {
            const course = await Course.findById(req.params.id).lean()
            res.render('courses/edit', {course});
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }

    //[PUT] /courses/:id
    async update(req, res){
        try {
            await Course.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/me/stored/courses')
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }

    //[DELETE] /courses/:id
    async delete(req, res){
        try {
            await Course.delete({_id: req.params.id})
            res.redirect('back')
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }

      //[DELETE] /courses/:id/forever
      async deleteForever(req, res){
        try {
            await Course.findByIdAndDelete({_id: req.params.id})
            res.redirect('back')
        } catch (error) {
            res.status(400).json({ error: 'ERROR!', details: error.message });
        }
    }
}

module.exports = new CourseController();
