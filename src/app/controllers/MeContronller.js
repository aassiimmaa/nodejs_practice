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

    async deletedCourses(req, res){
        try {
            const courses = await Course.findDeleted().lean()
            res.render('me/deleted_courses', {courses})
        } catch (error) {
            res.send(error)
        }
    }
    
}

module.exports = new MeContronller();
