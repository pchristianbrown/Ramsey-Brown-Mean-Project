var express=require ('express');
var app = express();
var mongoose = require ('./db/schema.js')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

app.listen(3000, function(){
    console.log ("listening on port 3000")
})
