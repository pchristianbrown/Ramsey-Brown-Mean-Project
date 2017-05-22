// refer to monggose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/#');

var db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.once('open', () =>{
  console.log("database has been connected!");
})

var Schema = mongoose.Schema

var AnswerSchema = new Schema({
  body: String,
});

var QuestionSchema = new Schema({
  title: String,
  body: String,
  answer: [AnswerSchema]
});


var Question = mongoose.model("Question", QuestionSchema);
var Answer = mongoose.model("Answer", AnswerSchema);

// var winterNights = new Question({title:"Winter Nights", body:"What did you think about Winter Nights?"});
// var answer1 = new Answer({ body:"Yes this is a great book!" });
//
// winterNights.answer.push(answer1)
//
// winterNights.save((err, question) =>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(question + "was saved")
//   }
// })

module.exports = mongoose;
