const { Router } = require('express');
const NoteController = require('../controllers/note.controllers');
const router = Router();

router.route('/')
    .get(NoteController.getAll)
    .post(NoteController.create)
router.route('/:id')
    .get(NoteController.getOne)
    .put(NoteController.update)
    .delete(NoteController.delete)

module.exports = router;