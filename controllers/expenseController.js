// require this file from the index.js 
//initilise the express object by requiring the express library (our framework)
const express = require('express');

//initilise the express router inbuilt function (our router module)
let router = express.Router();

const mongoose = require('mongoose');

//use mongoose model to declare the expense object so we can retrieve data from mongodb
//***** I think this is where my code is failing to import from mongo db
const Expense = mongoose.model('Expense');

//use get method to declare route - no CRUD operations required for route folder? why? 
router.get('/', (req, res) => {
    // place holder home page
    console.log('This is your homepage');
});

// now we write the router logic: 
// Router function for expense/list 
//(/expense is already specified in index.js so we only need to specify remaining path here)
router.get('/list', (req,res) => {
    Expense.find((err, doc) => {
        console.log(doc);
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in retrieval:' + err);
        }
        })
})
// to get by id
router.get('/:id', (req,res) => {
    Expense.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in retrieval:' + err);
        }})
})
// to post new records or update existing
router.post('/', (req, res) => {
    if (!req.body._id || req.body._id == '') {
        insertRecord(req, res);
    } else {
        updateRecord(req, res);
    }})

// map request body parameters to expense object model
// if succesful will redirect to expense/list

function insertRecord(req, res) {
    let expenseObj = new Expense();
    expenseObj.expense = req.body.expense;
    expenseObj.amount = req.body.amount;
    expenseObj.date = req.body.date;
    expenseObj.notes = req.body.notes;
    expenseObj.save((err, doc) => {
        if (!err) {
            res.redirect('expense/list');
        } else {
            console.log('Error during insert:' + err);
    }})}


function updateRecord(req, res) {
    Expense.findOneAndUpdate(
        {_id: req.body._id},
        req.body,
        {new: true},
        (err, doc) => {
            if (!err) {
                res.redirect('expense/list');
            } else {
                console.log('Error during update:' + err);
        }})}

// to delete records

router.delete('/delete/_id:', (req, res) => {
    Expense.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(200);
        } else {
            console.log('Error during delete:' + err);
}})
})

// export newly created router module
module.exports = router;