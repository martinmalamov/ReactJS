// const { Mongoose } = require("mongoose")

// const mongoose = require('mongoose')
// const config = require('./config')


// const connectDB = () => {

//     mongoose.connect(config.databaseUrl, {
//         useNewUrlParse: true,
//         useUnifiedTopology: true
//     }, (err) => {
//         if (err) {
//             console.error(err)
//             throw err
//         }
//     })
// }

// module.exports = {
//     connectDB
// }

const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
    return mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
}
