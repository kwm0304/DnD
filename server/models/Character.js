const {Schema, model } = require('mongoose')


let CharacterSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    race: {
        type: String,
        allowNull: false
    },
    //Combined need to be 75
    stats: {
        strength: {
            type: Number,
            required: true,
            max: 15
        },
        dexterity: {
            type: Number,
            required: true,
            max: 15
        },
        constitution: {
            type: Number,
            required: true,
            max: 15
        },
        intelligence: {
            type: Number,
            required: true,
            max: 15

        },
        wisdom: {
            type: Number,
            required: true,
            max: 15
        },
        charisma: {
            type: Number,
            required: true,
            max: 15
        }
},
spells: [{
    type: String,
    required: false
}],
proficiencyBonus: {
    type: Number,
    required: false
},
passivePerception: {
    type: Number,
    required: false
},
weapons: {
    type: String,
    required: true
},
background: {
    type: String,
    required: true
},

})
let Character = model("Character", CharacterSchema)
module.exports = Character