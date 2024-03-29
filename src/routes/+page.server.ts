import type { AllDataResponse } from '$lib/types'
import { hygraph } from '$lib/hygraph'
import { GET_ALL_DATA } from '$lib/hygraph/queries'

export const prerender = true

export const load = async () => {
  return await hygraph.request<AllDataResponse>(GET_ALL_DATA)
}
