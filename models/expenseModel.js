// inside this file we mention the schema & import mongoose library

const mongoose = require('mongoose');

// now create expense schema 
// keep all types as strings for now

let expenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: 'This field is required'
    },
    amount: {
        type: String,
        required: 'This field is required'
    },
    date: {
        type: String,
        required: 'This field is required'
    },
    notes: {
        type: String,
        required: 'This field is required'
    }
}, {
    // to stop display of v number showing with each record - optional
    versionKey: false
});

//call mongoose and model and schema

mongoose.model('Expense', expenseSchema);

// now run   $ nodemon index.js in terminal 
// ingnore deprecation warning this is just letting you know a new version is coming out