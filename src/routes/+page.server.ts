import type { Post } from '$lib/types/generated/graphql'
import { hygraph } from '$lib/hygraph'
import { GET_POSTS } from '$lib/hygraph/queries'

interface PostsResponse {
  posts: Post[]
}

export const load = async () => {
  return await hygraph.request<PostsResponse>(GET_POSTS)
}
