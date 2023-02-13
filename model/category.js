const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const catSchema = new Schema({
  category: String
});
const catData = mongoose.model('catData', catSchema);
module.exports = catData;