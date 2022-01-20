const express = require('express');
const Model = require('../models');
// const Item = require('../models/item');
const Views = '../views/'

module.exports = {

    index: function (req, res) { //画面
        res.sendFile('/app/views/memo.html');
    },

/* ============  read  ============ */
    read: function (req, res) { //メモ一覧取得
        Model.Item.findAll({ order: [['createdAt', 'DESC']] }).then( data =>
            res.type("json").status(200).send(JSON.stringify(data))
        );
    },

    sortRead: function (req, res) { //メモ一覧取得（並び替え）
        Model.Item.findAll({ order: [[req.params.where , req.params.orderby]] }).then( data =>
            res.type("json").status(200).send(JSON.stringify(data))
        );
    },

/* ============ create ============ */

    createAdd: function (req, res) { //登録処理
        Model.Item.create({
            title: req.body.itemTitle,
            text: req.body.itemText
        }).then(item => {
            res.type("json").status(200).send(JSON.stringify(item))
        });
    },

/* ============  update  ============ */

    editUpdate: function (req, res) { //変更処理
        Model.Item.update(
            { title: req.body.itemTitle , text: req.body.itemText },
            { where: { id: req.params.id  } }
        ).then(item => {

            res.type("json").status(200).send(JSON.stringify(item))
        });
    },

/* ============  delete  ============ */

    delete: function (req, res) { //削除処理
        Model.Item.destroy(
            { where: { id: req.params.id  } }
        ).then(data => {
            res.type("json").status(200).send(JSON.stringify(data))
        });
    }

}