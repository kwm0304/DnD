// module 21

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($passowrd: String!, $password: String!) {
    login(password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($username: String!, $password: String!) {
    newUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_CHARACTER = gql`
mutation createCharacter($update: update) {
  createCharacter(update: $update) {
    username
    password
    characters {
      name
      race
      image
      class
      background
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      level
      hitPoints
      weapons
      alignment
      proficiencyBonus
      passivePerception
      user {
        username
      }
      items
    }
  }
}`

export const UPDATE_CHARACTER = gql`
mutation updateCharacter($characterId: ID, $update: update) {
  updateCharacter(
    characterId: $characterId
    update: $update
  )
  {
    username
  }
}`

export const DELETE_CHARACTER = gql`
mutation deleteCharacter($characterId: ID) {
  deleteCharacter(characterId: $characterId) {
    username
  }
}`

