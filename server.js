'use strict'

var express = require('express');
var app = express();

var path = require('path');

// Defines a folder for the static files
app.use(express.static('public'));

// Defines the main entry point
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, function() {
    console.log('App web-server listening on port 3000');
});