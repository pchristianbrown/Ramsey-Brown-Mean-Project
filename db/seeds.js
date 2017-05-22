var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Question = Schema.Question
var Answer = Schema.Answer

Question.remove({}, err =>{
  if(err){
    console.log(err)
  }
});

Answer.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var midnight = new Question({title:"Midnight", body:"What did you think about the Midnight?"})
var theSellout = new Question({title:"Sellout", body:"What did you think about the Sellout?"})
var theColdestWinterEver = new Question({title:"The Coldest Winter Ever", body:"What did you think about the The Coldest Winter Ever?"})

var answer = new Answer({ body: "This book is great!"})

var questions = [midnight, theSellout, theColdestWinterEver]
var answers = [answer]

for(var i = 0; i < questions.length; i++){
  questions[i].answer.push(answers[i], answers[i])

  questions[i].save((err, question) => {
      if (err){
        console.log(err)
      }else {
        console.log(question)
      }
  })
};
