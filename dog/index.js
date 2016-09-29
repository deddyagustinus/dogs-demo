const router = require('express').Router()
const controller = require('./dog.controller')

router.get('/', controller.list)
router.get('/:id', controller.getDog)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
router.post('/', controller.save)

module.exports = router