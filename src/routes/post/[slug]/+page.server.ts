import type { Post } from '$lib/types/generated/graphql.js'
import { hygraph } from '$lib/hygraph/index.js'
import { GET_POSTS, GET_POST } from '$lib/hygraph/queries.js'

export const load = async ({ params: { slug } }) => {
  return await hygraph.request<{ post: Post }>(GET_POST, { slug })
}

export const entries = async () => {
  const { posts } = await hygraph.request<{ posts: Array<Post> }>(GET_POSTS)
  return posts.map(({ slug }) => ({ slug }))
}

export const prerender = true
