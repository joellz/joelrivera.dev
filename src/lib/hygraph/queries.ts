import { gql } from 'graphql-request'

export const GET_ALL_DATA = gql`
  query allData {
    projects(first: 3) {
      id
      name
      description
      repo
      url
    }

    employers(first: 3) {
      id
      name
      description
      duration
      link
    }

    posts(first: 3, orderBy: publishedAt_DESC) {
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

export const GET_POSTS = gql`
  query Posts {
    posts(orderBy: publishedAt_DESC) {
      id
      slug
      title
      updatedAt
    }
  }
`

export const GET_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      description
      body
      publishedAt
    }
  }
`
