const express = require('express');
 
const router = express.Router();
 
const postsController = require('../controller/postsController.js');

// index
router.get('/', postsController.index);
 
// show
router.get('/:id', postsController.show);

// store
router.get('/', postsController.store);

// update
router.get('/:id', postsController.update);

// modify
router.get('/:id', postsController.modify);

// destroy
router.get('/:id', postsController.destroy);

module.exports = router;