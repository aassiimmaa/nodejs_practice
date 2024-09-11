const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeContronller');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.deletedCourses)

module.exports = router;
