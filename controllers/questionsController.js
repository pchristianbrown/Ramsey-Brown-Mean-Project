var Schema = require("../db/schema.js");
var Question = Schema.Question;
var Answer = Schema.Answer;

var questionsController = {
  index(){
    Question.find({}, (err, questions) =>{
      console.log(questions);
    });
  },
show: function(){
  Question.findOne({"title": req.title}, (err, question) =>{
    console.log(question);
    return question;
    });
  },
update: function(req, update){
  QuestionModel.findOneAndUpdate(req, update, {new: true}, function(err, questions){
    if(err){
      console.log(err);
    }else{
      console.log(questions);
    }
  });
},
destroy: function(req){
  Question.findOneAndRemove(req, function(err, question){
    if(err){
      console.log(err);
    }else{
      console.log(question);
      }
    });
  }
};
