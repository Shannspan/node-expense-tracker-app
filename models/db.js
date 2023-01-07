// first import mongoose
const mongoose = require('mongoose');

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

const MongoClient = require("mongodb").MongoClient;

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://ExpTrackUser:SfXKkwWTHuLYQ7jJ@myexpensetracker.wydgt9x.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('MyExpenseTracker');
    const expenses = database.collection('expenses');
    // Query for a movie that has the title 'Back to the Future'
    const query = { expense: 'Hat' };
    const expense = await expenses.findOne(query);
    console.log(expense);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


require('./expenseModel');