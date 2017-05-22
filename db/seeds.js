var mongoose = require("../db/schema.js");

var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

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

for(var i = 0; i < questions.length; i++){
  questions[i].answer.push(answer)

  questions[i].save((err, question) => {
      if (err){
        console.log(err)
      }else {
        console.log(question)
      }
  })
};
