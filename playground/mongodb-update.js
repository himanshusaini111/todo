const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
    if(err){
        return console.log("Cannot connect to TodoApp Database");
    }
    console.log('Connected to mongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a95bcf6bc105c0a188f96e3')
    }, {
        $set:{
            name: 'RYUK',
        },
        $inc:{
            age:1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    })

    client.close();
});