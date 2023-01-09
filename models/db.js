// first import mongoose
const mongoose = require('mongoose');

// code from include full driver code example Atlas connect

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://ExpTrackUser:<password>@myexpensetracker.wydgt9x.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const url = `mongodb+srv://ExpTrackUser:SfXKkwWTHuLYQ7jJ@myexpensetracker.wydgt9x.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db('MyExpenseTracker');
    const expenses = database.collection('expenses');
    // Query for a expense 'Hat'
    // working and is evidence of Connection to Atlas
    // but this connection is not carrying through to front end 
    // front end is also not getting data to back end
    const query = { expense: 'Hat' };
    const expense = await expenses.findOne(query);
    console.log(expense);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const connectParams = {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
}

// then we will call mongoose object and connect function
// obtain the connection string from MongoDB compass 
// NOTE: use 0.0.0.0 not 'localhost'
// then add in the database name to end of route

// later addition: Mongodb Atlas use supplied connection string

mongoose.connect(url, connectParams); {
    err => {
        if (!err) {
    console.log('Connected to Database');
} else { 
    console.log('Error in connection to Database' + err);
  }}};




    // then create a new file expenseModel in models folder and require

require('./expenseModel');