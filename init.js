var mongodb = require('mongodb');
var express = require('express');
var app = express();
var path = require("path");
var async = require("async");
var expressHbs = require('express3-handlebars');
var bodyParser = require('body-parser');
var MongoClient = mongodb.MongoClient;
var mDb; // instance of db
var combos = require('./js/combos');
var dbHelper = require('./js/dbhelper');

// Connection URL. This is where the mongodb server is running.
var url = 'mongodb://localhost:27017/handlebarstest';

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

//start mongo server before connecting (/installdir mongod)
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
  	mDb = db;
    console.log('Connection established to', url);
  }
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/insertdata', function (req, res) {
  //test insert array in db
  combos.generateCombos(mDb, function(err,result){
    res.render('insertdata', err ? {error:"something went wrong"} : result);
  });
});

app.get('/combos', function(req, res){
  //test getting array from db and show
  dbHelper.getCombos(mDb, function (err,result){
    res.render('combos', err ? {error:"something went wrong"} : result);
  });
  
});

app.post('/clearallcombos', function(req, res){
  dbHelper.deleteAllCombos(mDb, function (err,result){
    res.render('combos', err ? {error:"something went wrong"} : result);
  });
});

app.get('/bywords', function(req, res){
  //TODO: build wordlistcomparison for combined result and save to separate db table
  res.render('bywords', {error:"under construction"});
});

app.get('/byfreq', function(req, res){
  //TODO: build frequencyanalyzer for combined result and save to separate db table
  // interface for changing the settings of the frequency analyzer?
  res.render('byfreq', {error:"under construction"});
});

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});

