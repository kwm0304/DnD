//kenan
const {Schema, model } = require('mongoose') 

let GroupSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now(),
        get: timestamps => dateFormat(timestamp)
    },
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'Character'
    }],
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    notes: [{
        type: String,
        minLength: 8,
        maxLength: 2000
    }],
    dungeonMaster: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    })

    let Group = model("Group", GroupSchema)

module.exports = Group