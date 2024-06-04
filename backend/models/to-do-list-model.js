const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const List = mongoose.model('Users', UserSchema);

module.exports = List