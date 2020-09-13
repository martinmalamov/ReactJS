const env = process.env.NODE_ENV || development

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: 'mongodb+srv://user:softuni-password@cluster0.t7dpb.mongodb.net/origami?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
}

module.exports = config[env]

// module.exports = {
//     databaseUrl: "mongodb+srv://user:softuni-password@cluster0.t7dpb.mongodb.net/cubicle?retryWrites=true&w=majority"
// }