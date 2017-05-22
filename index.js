var express=require ('express');
var app = express();
var mongoose = require ('./db/schema.js')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

app.get('/', (req, res) => {
  res.send("It was the best of times. It was the worst of times.");
})

// app.get('')













app.listen(3000, function(){
    console.log ("listening on port 3000")
})
