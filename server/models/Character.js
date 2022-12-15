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
    stats: {
        strength: {
            type: Number,
            required: true
        },
        dexterity: {
            type: Number,
            required: true,
        },
        constitution: {
            type: Number,
            required: true
        },
        intellegence: {
            type: Number,
            required: true
        },
        wisdom: {
            type: Number,
            required: true
        },
        charisma: {
            type: Number,
            required: true
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
}

})