const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
    if(err){
        return console.log("Cannot connect to TodoApp Database");
    }
    console.log('Connected to mongoDB server');

    const db = client.db('TodoApp');    
    // db.collection('Todos').insertOne({
    //     text: 'somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to add to collection', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Himanshu',
        age: 20,
        location: 'India'
    }, (err, result) => {
        if(err){
            return console.log('Unable to add to collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});