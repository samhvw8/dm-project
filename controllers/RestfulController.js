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

    product.img = req.body.img;

    var detail = {};

    for (var key in req.body) {
        if (key === 'name' || key === 'type' || key === 'price' || key === 'img')
            continue;

        detail[key] = req.body[key];

    }


    product.detail = detail;

    product.markModified('detail')

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

var getAllProduct = function (req, res) {

    Product.find(function (err, products) {

        if (err) {
            res.status(500).json({
                status: false,
                error: "Can not get list of product because of database error !"
            });
            return;
        }
        res.json({
            status: true,
            products: products
        });

    });

};

var getProductById = function (req, res) {

    Product.findById(req.params.id, function (err, product) {
        if (err) {
            res.status(500).json({
                status: false,
                error: "Can not find product because of database error !"
            });
            return;
        }
        res.json({
            status: true,
            user: product
        });

    });
};

var removeProductById = function (req, res) {
    // remove product by id
    Product.remove({
        _id: req.params.id
    }, function (err, product) {
        if (err) {
            res.status(500).json({
                status: false,
                error: "Can not remove product because of database error !"
            });
            return;
        }

        res.json({
            status: true,
            message: 'Product Successfully deleted'
        });

    });
};


RestfulController.post('/product', addProduct);
RestfulController.get('/product', getAllProduct);
RestfulController.get('/product/:id', getProductById);
RestfulController.delete('/product/:id', removeProductById);

module.exports = RestfulController;
