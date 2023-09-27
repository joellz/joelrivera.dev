import type { AllDataResponse } from '../types'
import { hygraph } from '$lib/hygraph'
import { GET_ALL_DATA } from '$lib/hygraph/queries'

export const load = async () => {
  return await hygraph.request<AllDataResponse>(GET_ALL_DATA)
}
