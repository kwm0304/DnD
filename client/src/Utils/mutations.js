// module 21

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_CHARACTER = gql`
mutation createCharacter($characterInput: characterInput) {
  createCharacter(characterInput: $characterInput) {
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
}
`;

export const UPDATE_CHARACTER = gql`
mutation updateCharacter($characterId: ID, $characterInput: characterInput) {
  updateCharacter(
    characterId: $characterId
    update: $update
  )
  {
    username
  }
}`;

export const DELETE_CHARACTER = gql`
mutation deleteCharacter($characterId: ID) {
  deleteCharacter(characterId: $characterId) {
    username
  }
}`;
