import type { Project, Employer, Post } from './generated/graphql'

export interface AllDataResponse {
  projects: Array<Project>
  employers: Array<Employer>
  posts: Array<Post>
}
