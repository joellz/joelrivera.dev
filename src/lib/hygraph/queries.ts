import { gql } from 'graphql-request'

export const GET_ALL_DATA = gql`
  query allData {
    projects {
      id
      name
      description
      repo
      url
    }

    employers {
      id
      name
      description
      duration
      link
    }

    posts {
      id
      slug
      title
      description
      body
      publishedAt
      updatedAt
    }
  }
`
