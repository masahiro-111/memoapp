var express = require('express');
var router = express.Router();

var itemController = require('../controllers/ItemController')

router.get('/', itemController.read);
router.get('/new', itemController.new);
router.post('/create', itemController.createAdd);
router.get('/edit/:id', itemController.edit);
router.post('/update/:id', itemController.editUpdate);
router.get('/delete/:id', itemController.delete);

module.exports = router;