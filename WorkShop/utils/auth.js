const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const authHeader = req.get['Authorization']
    if (!authHeader) {
        return res.status(401).send({
            message: 'Missing authorization header'
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        jwt.verify(token, 'CUBE-WORKSHOP')
        next()
    } catch (err) {
        return res.status(401).send({
            message: 'You are not alowed to do this'
        })
    }

}

module.exports = { authenticate }