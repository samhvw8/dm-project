/**
 * Created by SSL.
 */
'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var db = require('./models/db');

// app.set('views', __dirname + '/views')
// app.set('view engine', 'pug')
// app.use('/static/', express.static(__dirname + '/views/public'))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3001;        // set our port

// add Controller
app.use('/api', require('./controllers/RestfulController'));
// app.use('/', require('./controllers/ViewsController'));

// start
app.listen(port);
console.log('server running in on port ' + port);
