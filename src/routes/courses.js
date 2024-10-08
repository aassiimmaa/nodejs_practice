const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/many', courseController.deleteMany)
router.post('/restore/many', courseController.restoreMany)
router.get('/:id/edit', courseController.edit);
router.delete('/:id/forever', courseController.deleteForever)
router.delete('/:id', courseController.delete)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.get('/:slug', courseController.show);

module.exports = router;
