const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const quizSchema = new Schema({
  category: String,
  question: String,
  answer: String,
  options: Array
});
const quizData = mongoose.model('quizData', quizSchema);
module.exports = quizData;