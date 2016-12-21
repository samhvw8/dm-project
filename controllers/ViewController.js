'use strict'

var express = require('express');


var ViewsController = express.Router();

ViewsController.get('/', function (req, res) {
    res.render('home/index.pug',
        {name: 'Home'}
    );
});

module.exports = ViewsController;
