/**
 * Created by samhv on 12/4/16.
 */
'use strict'


var express = require('express');
var Product = require('../models/Product');


var RestfulController = express.Router();

var addProduct = function (req, res) {

    var product = new Product();

    product.name = req.body.name;

    product.type = req.body.type;

    product.price = req.body.price;

    for (var key in req.body) {
        if (key == 'name' || key == 'type' || key == 'price')
            continue;

        product.detail[key] = req.body[key];
    }

    product.save(function (err) {
        if (err) {
            res.status(500).json({
                status: false,
                error: "Can not create user because of database error !"
            });
            return;
        }

        res.status(201).json({
            status: true,
            message: 'product created!'
        });

    });


};


RestfulController.post('/product', addProduct);

module.exports = RestfulController;