const { Schema, model } = require('mongoose');

const article = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  // image: {
  //   type: String,
  //   required: true
  // },
  date: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
});

module.exports = model('Article', article);