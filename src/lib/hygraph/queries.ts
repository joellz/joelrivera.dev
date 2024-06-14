import { gql } from 'graphql-request'

export const GET_EXPERIENCE_AND_PROJECTS = gql`
  query Employers {
    employers {
      id
      name
      role
      duration
      description
    }

    projects {
      id
      name
      description
      repo
      url
    }
  }
`

export const GET_EXPERIENCE = gql`
  query Employers {
    employers {
      id
      name
      role
      duration
      description
    }
  }
`

export const GET_POSTS = gql`
  query Posts {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      title
      description
      createdAt
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
      createdAt
    }
  }
`
