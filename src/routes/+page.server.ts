import type { AllDataResponse } from '../types'
import { hygraph } from '$lib/hygraph'
import { GET_ALL_DATA } from '$lib/hygraph/queries'

export const load = async () => {
  const { projects, employers, posts } = await hygraph.request<AllDataResponse>(GET_ALL_DATA)

  return {
    projects,
    employers,
    posts
  }
}
