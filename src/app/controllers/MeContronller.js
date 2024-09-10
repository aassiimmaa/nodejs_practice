const Course = require('../models/Course');

class MeContronller {
    //[GET] /me/stored/courses
    async storedCourses(req, res) {
        try {
            const courses = await Course.find().lean()
            res.render('me/stored_courses', {courses})
        } catch (error) {
            res.send(error)
        }
    }

    
}

module.exports = new MeContronller();
