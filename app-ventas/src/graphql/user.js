import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      nombre
      apellido
      identificacion
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      nombre
      apellido
      identificacion
      email
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
    }
  }
`;