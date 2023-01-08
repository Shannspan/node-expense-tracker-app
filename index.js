require('./models/db');
// must then create models folder containing  db.js file

// start building your own server by: 
//by calling express and body-parser libararies
// make sure they are installed as dependencies in package.json
// if not add via terminal eg npm i express

const express = require('express');
const bodyParser = require('body-parser');
//****const MongoClient = require('mongodb').MongoClient;

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

//Below code is now redundant as using React app front end ?? I think ??

app.get('/', (req, res) => {
    //.send or render a view you have created
    res.send(expenses)
});

app.post('/', (req, res) => {
    console.log(req.body);
    return res.send(`Expense has been added: ${req.body.expense}`);
}) 

// now app needs to listen to a port
// always include console.log for 'health' check

app.listen(3000, () => console.log('Server started at 3000'));

// to start server connection in bash terminal: $ npm start 

// use expenseController object created above

//"/expense" is the mongodb collection I think ?????

app.use("/expense", expenseController);

//why is this "/expense" when the collection is expenses?
