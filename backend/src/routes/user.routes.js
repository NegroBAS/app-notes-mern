const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/user.controller');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.route('/:id')
    .delete(UserController.delete)
    .get(UserController.get);
router.get('/admin', UserController.getAll);
module.exports = router;