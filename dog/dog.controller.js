const service = require('./dog.service')

let controller = {}


controller.list = (req, res) => {
  service.fetch(req.query, (err, dogs) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(dogs)
    }
  })

}

controller.getDog = (req, res) => {
  const handleResponse = (err, dogs) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(dogs[0])
    }
  }

  service.fetch({_id: req.params.id}, handleResponse)
}

controller.save = (req, res) => {
  let dog = req.body
  service.save(dog, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

controller.delete = (req, res) => {
  service.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

controller.update = (req, res) => {
  service.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

module.exports = controller



