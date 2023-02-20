const express = require('express');
const router = express.Router();

const { upload } = require('../middleware/uploadfile')
const blogController = require('../app/controllers/BlogController');

router.get('/blogs/create', blogController.create);
router.post('/blogs/store', upload.single('image'), blogController.store);
router.get('/blogs/:slug', blogController.show);
router.get('/', blogController.home);

module.exports = router;
