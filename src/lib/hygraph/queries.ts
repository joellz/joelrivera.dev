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

    posts(first: 3, orderBy: publishedAt_DESC) {
      id
      slug
      title
      description
      body
    }
  }
`

export const GET_POSTS = gql`
  query Posts {
    posts(orderBy: publishedAt_DESC) {
      id
      slug
      title
      publishedAt
    }
  }
`

export const GET_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      description
      body
      publishedAt
    }
  }
`
