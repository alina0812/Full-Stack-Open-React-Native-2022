import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
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
  pageInfo {
    hasNextPage
    endCursor
    startCursor
  }
  totalCount
}
}
`;

export const GET_REPOSITORY = gql`
query ($id: ID!){
  repository(id: $id) {
    id
    fullName
    url
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;

export const GET_ME = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
          repository {
            id
          }
        }
      }
    }
  }
}
`;