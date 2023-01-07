// first import mongoose
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');





async function mainAtlas() {

const uri = "mongodb+srv://ExpTrackUser:<SfXKkwWTHuLYQ7jJ>@myexpensetracker.wydgt9x.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const collection = client.db("MyExpenseTracker").collection("expenses");
    try {
        //Connect to the MongoDB Atlas cluster
        await client.connect();

        //make appropriate DB calls
        await listDatabases(client);
        console.log(collection);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

mainAtlas().catch(console.error);


// then we will call mongoose object and connect function
// obtain the connection string from MongoDB compass 
// NOTE: use 0.0.0.0 not 'localhost'
// then add in the database name to end of route

// later addition: Mongodb Atlas use supplied connection string

mongoose.connect('mongodb+srv://ExpTrackUser:SfXKkwWTHuLYQ7jJ@myexpensetracker.wydgt9x.mongodb.net/?retryWrites=true&w=majority', {
    //inside this connect function we will set a rule
    useNewUrlParser: true 

},
// then add in a callback function we will check if there is an error
// and add a console.log for each possible result
err => {
    if (!err) {
        console.log('Connection succeeded');
    } else {
        console.log('Error in connection' + err);
    }});

    // then create a new file expenseModel in models folder and require

    require('./expenseModel');