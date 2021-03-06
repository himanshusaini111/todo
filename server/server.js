var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.send(e);
    });

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})