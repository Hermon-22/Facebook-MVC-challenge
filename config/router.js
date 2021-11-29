const express = require('express');
const controller = require('../controller/controller');
const router = express.Router()

router.all('/feed', controller.home)            
router.get('/feed/:id', controller.showOne)
router.get('/feed/delete/:id', controller.removeFeed)
router.get('/feed/edit/:id', controller.updateFeed)
router.post('/feed/:id', controller.editFeed)

// NOT FOUND
router.get('/:id', controller.notF)

module.exports = router