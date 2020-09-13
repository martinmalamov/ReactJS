const controllers = require('../controllers/')
const router = require('express').Router()
const { auth } = require('../utils')

route.get('/', controllers.origami.get)
route.post('/', auth(), controllers.origami.post)
route.put('/:id', auth(), controllers.origami.put)
route.delete('/:id', auth(), controllers.origami.delete)

module.exports = router
