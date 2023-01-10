require('./models/db');
// must then create models folder containing  db.js file

// start building your own server by: 
//by calling express and body-parser libararies
// make sure they are installed as dependencies in package.json
// if not add via terminal eg npm i express

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')


// require controller functions, best to declare before express application

const expenseController = require('./controllers/expenseController');

// create app variable which calls express function
// to start a new express application

const app = express();

let cors = require('cors');
app.use(cors());

//app variable will now use the body-parser.json to parse the json request body to turn it in to a js string

app.use(bodyParser.json());

//then assignes it to the request.body object below

//to parse bodies from the URL
// extended: false so request object that can be string or array
// if set to 'true' value can be any type
app.use(bodyParser.urlencoded({extended: false}));

//this is also middleware that constructs the api
// .get is the http method for which the middleware applies
// '/' is the path or route for which the middleware applies
// req is request argument to middleware function
// res is response argument to middleware function
// middleware is returning response in json format
// sending though req.body as an argument


app.get('/', (req, res) => {
    //.send or render a view you have created
    res.send(`
        <h2>Shann's Expense Dashboard</h2>
        <h3>Click her to get access to the <b><a href="/expense/list">Database</a></b></h3>`)
});


app.post('/', (req, res) => {
    console.log(req.body);
    return res.send(`Expense has been added: ${req.body.expenses}`);
}) 

// now app needs to listen to a port
// always include console.log for 'health' check

// app.listen('https://node-expense-tracker-app-v2.onrender.com', () => console.log('Server started at Render deploy'));

app.listen = function listen() {
    let server = http.createServer(this);
    return server.listen.apply('https://node-expense-tracker-app-v2.onrender.com'),
    console.log('Server started at Render deploy');
  };

// to start server connection in bash terminal: $ npm start 

// use expenseController object created above & create shortcut for 
//all API calls by including '/expense' 
//as auto include to start all file paths

app.use("/expense", expenseController);


