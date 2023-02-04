const express = require('express');
const router = express.Router();

const clientController = require('../app/controllers/ClientController');

router.get('/blogs/create', clientController.create);
router.post('/blogs/store', clientController.store);
router.get('/blogs/:slug', clientController.show);
router.get('/', clientController.home);

module.exports = router;
