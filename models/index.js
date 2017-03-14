var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var quoteSchema = new Schema({
  quotes: { type: String, required: true },
  author: { type: String, required: true },
  wiki: { type: String,required: true}
})

// the schema is useless so far
// we need to create a model using it
var Quote = mongoose.model('Quote', quoteSchema)

// make this available to our users in our Node applications
module.exports = Quote
