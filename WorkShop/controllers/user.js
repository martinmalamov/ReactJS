const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body
            models.User.create({ username, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },
        login: (req, res, next) => {
            const { username, password } = req.body
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password')
                        return
                    }

                    const token = utils.jwt.createToken({ id: user._id })
                    res.cookie(config.authCookieName, token).send(user)
                })
                .catch(next)
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName]
            console.log('-'.repeat(100))
            console.log(token)
            console.log('-'.repeat(100))

            models.tokenBlacklist.create({ token })
                .token(() => {
                    
                })
        }

    }
}