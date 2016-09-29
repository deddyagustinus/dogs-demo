const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema( {
  name: String,
  breed: String,
  age: Number
})

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog

