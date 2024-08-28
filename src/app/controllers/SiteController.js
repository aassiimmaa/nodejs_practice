const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /home
    async index(req, res) {
        // res.render('home');s
        try {
            //lean is a method use for converting the query result from Mongoose Document form to JavaScript Plain Object. Without method 'lean', it will be error because accessing infomation course will be denied.
            const courses = await Course.find().lean();
            res.render('home', { courses });
        } catch (error) {
            res.status(400).json({ error: 'ERROR!' });
        }
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
