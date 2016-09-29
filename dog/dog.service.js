const Dog = require('./dog')
const ObjectId = require('mongoose').Types.ObjectId

let service = {}

service.fetch = (params, cb) => {

  if(params._id) {
    params._id = new ObjectId(params._id)
  }

  Dog.find(params, (err, dogs) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, dogs)
    }
  })
}

service.save = (data, cb) => {
  const dog = new Dog(data)
  dog.save(dog, (err, result) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, result)
    }
  })
}

service.update = (id, data, cb) => {
  id = new ObjectId(id)
  Dog.update({_id: id},{'$set': data}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

service.delete = (id, cb) => {
  Dog.remove({_id: ObjectId(id)}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

module.exports = service