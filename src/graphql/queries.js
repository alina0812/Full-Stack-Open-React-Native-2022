import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        cursor
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_ME = gql`
query {
  me {
    id
    username
  }
}
`;

// other queries...