import type { Project, Post } from './generated/graphql'

export interface AllDataResponse {
  projects: Array<Project>
  posts: Array<Post>
}
