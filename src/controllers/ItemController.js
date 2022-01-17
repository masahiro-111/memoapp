const express = require('express');
const Model = require('../models');
// const Item = require('../models/item');
const Views = '../views/'

module.exports = {

/* ============  read  ============ */
    read: function (req, res) { //メモ一覧
        Model.Item.findAll().then( data =>
            res.render('index.ejs' , {items: data})
        );
    },

/* ============ create ============ */

    new: function (req, res) { //登録画面
        res.render('new.ejs');
    },

    createAdd: function (req, res) { //登録処理
        Model.Item.create({
            title: req.body.itemTitle,
            text: req.body.itemText
        }).then(item => {
            // res.render('new.ejs');
            res.redirect('/')//methodがpostのときはredirectを使う
        });
    },

/* ============  update  ============ */

    edit: function (req, res) { //変更画面
        Model.Item.findByPk( req.params.id ).then( data =>
            res.render('edit.ejs' , { item: data })
        );
    },

    editUpdate: function (req, res) { //変更処理
        Model.Item.update(
            { title: req.body.itemTitle , text: req.body.itemText },
            { where: { id: req.params.id  } }
        ).then(item => {
            res.redirect('/');
        });
    },

/* ============  delete  ============ */

    delete: function (req, res) { //変更処理
        Model.Item.destroy(
            { where: { id: req.params.id  } }
        ).then(item => {
            res.redirect('/');
        });
    }

}