const router = require('../routes/')
const send = require('send')

module.exports = (app) => {
    app.use('/api/user' , router.use)
    app.use('/api/origami' , router.origami)
    app.use('*' , (req , res ,next ) => res.send(
        '<h1> Something went wrong. Try again !'
    ))
}