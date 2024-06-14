import type { Employer, Project } from '$lib/types/generated/graphql'
import { hygraph } from '$lib/hygraph'
import { GET_EXPERIENCE_AND_PROJECTS } from '$lib/hygraph/queries'

interface Response {
  employers: Array<Employer>
  projects: Array<Project>
}

export const load = async () => {
  return await hygraph.request<Response>(GET_EXPERIENCE_AND_PROJECTS)
}

export const prerender = true
