// first import mongoose
const mongoose = require('mongoose');

// then we will call mongoose object and connect function
// obtain the connection string from MongoDB compass 
// NOTE: use 0.0.0.0 not 'localhost'
// then add in the database name to end of route

mongoose.connect('mongodb://0.0.0.0:27017/MyExpenseTracker', {
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