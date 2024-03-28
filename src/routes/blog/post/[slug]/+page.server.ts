import type { Post } from '../../../../types/generated/graphql.js'
import { hygraph } from '$lib/hygraph/index.js'
import { GET_POST } from '$lib/hygraph/queries.js'

export const prerender = true

export const load = async ({ params: { slug } }) => {
  return await hygraph.request<{ post: Post }>(GET_POST, { slug })
}
