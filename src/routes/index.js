var express = require('express');
var router = express.Router();

var itemController = require('../controllers/ItemController')

router.get('/', itemController.index);  //画面
router.get('/read', itemController.read); //メモ一覧取得
router.get('/sort_read/:where/:orderby', itemController.sortRead); //メモ一覧取得（並び替え）
router.post('/create', itemController.createAdd); //登録処理
router.put('/update/:id', itemController.editUpdate); //変更処理
router.get('/delete/:id', itemController.delete); //削除処理

module.exports = router;