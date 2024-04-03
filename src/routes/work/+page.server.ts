import type { Employer } from '$lib/types/generated/graphql'
import { hygraph } from '$lib/hygraph'
import { GET_EXPERIENCE } from '$lib/hygraph/queries'

interface EmployersResponse {
  employers: Array<Employer>
}

export const load = async () => {
  return await hygraph.request<EmployersResponse>(GET_EXPERIENCE)
}

export const prerender = true
