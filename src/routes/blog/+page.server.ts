import type { Post } from '$lib/types/generated/graphql.js'
import { hygraph } from '$lib/hygraph/index.js'
import { GET_POSTS } from '$lib/hygraph/queries.js'

export const load = async () => {
  return await hygraph.request<{ posts: Array<Post> }>(GET_POSTS)
}
