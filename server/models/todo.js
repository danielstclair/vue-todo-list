const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Todo', schema);
