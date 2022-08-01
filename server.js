// Load Node modules
var express = require('express');
const ejs = require('ejs');
var Datastore = require('nedb');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(6233);

db = new Datastore({ filename: 'names.db', autoload: true });

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/db', function (req, res) {
    let doc = {name:req.query.name,
    	birthday:req.query.birthday
    }
    db.insert(doc)
    console.log(doc)
});