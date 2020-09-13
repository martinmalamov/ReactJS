const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const Schema = mongoose.Schema
const Model = mongoose.model
const { String, ObjectId } = Schema.Types

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // match: [/^[A-Za-z0-9]+$/, 'Username is not valid'],
        // minlength: 5
    },
    password: {
        type: String,
        required: true,
        // match: [/^[A-Za-z0-9]+$/ , 'Password contain invalid characters'],
        // minlength: 8
    },

    posts: [{ type: ObjectId, ref: 'Origami' }]
})

userSchema.methods = {

}

module.exports = mongoose.model('User', UserSchema)