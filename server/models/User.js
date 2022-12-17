//kenan
const { Schema, model } = require('mongoose')
const bcrypt = require ('bcrypt')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
          },
          password: {
            type: String,
            required: true,
            minlength: 5
          },
          characters: [{
            type: Schema.ObjectId,
            ref: "Character"
          }],
          groups: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
          }]
    }
)

let User = model("User", UserSchema)
module.exports = User