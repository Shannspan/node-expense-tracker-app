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
        type: Date, default: Date.now,
        required: 'This field is required',
        get: function(value) {
            return value.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }).replace(/\//g, "-");
        }
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

module.exports = mongoose.model('Expense', expenseSchema);

// now run   $ nodemon index.js in terminal 
// ingnore deprecation warning this is just letting you know a new version is coming out
