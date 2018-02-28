const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
    if(err){
        return console.log("Cannot connect to TodoApp Database");
    }
    console.log('Connected to mongoDB server');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text:'eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text:'eat dinner'}).then((result) => {
    //     console.log(result.result);
    // });
    
    //findeOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name:'Andrew'}).then((result) => {
        console.log(result.result);
    })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a95bc55969ad62b705b2f14')}).then((result) => {
        console.log(result);
    });

    client.close();
});