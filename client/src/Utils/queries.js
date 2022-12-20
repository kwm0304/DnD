import { gql } from '@apollo/client'

export const QUERY_CHARACTER = gql`
query character($username: String) {
    character(username: $username) {
        _id
        name
        race
        class
        stats {
            strength
            dexterity
            constitution
            intelligence
            wisdom
            charisma
        }
        spells
        proficiencyBonus
        passivePerception
        weapons
        background
    }
}`;

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username
        characters{
            name
            stats
        }
        groups {
            name
            notes
            dungeonMaster
        }
    }
}`

export const QUERY_ME = gql`
{
    me {
        _id
        username
        character
        group {
            name
            users
            notes
            dungeonMaster
        }
    }
}`