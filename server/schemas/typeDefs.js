const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: Mixed
    character: [Character]
}

type Character {
    _id: ID
    name: String
    race: String
    class: String
    stats: Int
    spells: String
    proficiencyBonus: Int
    passivePerception: Int
    weapons: String
    background: String

type Group {
    _id: ID
    name: String
    date: String
    users: [User]
    characters: [Character]
    notes: String
    dungeonMaster: [User]
}

type Query {

}
}`

module.exports = typeDefs;
