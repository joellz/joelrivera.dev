import type { Post } from '../../../../types/generated/graphql.js'
import { dev } from '$app/environment'

import { pscale } from '$lib/pscale/index.js'
import { hygraph } from '$lib/hygraph/index.js'
import { GET_POST } from '$lib/hygraph/queries.js'

export const load = async ({ params: { slug } }) => {
  const { post } = await hygraph.request<{ post: Post }>(GET_POST, { slug })

  const views = new Promise(async (resolve, reject) => {
    if (dev) resolve(null)

    try {
      const { rows } = await pscale.transaction(async (tx) => {
        await tx.execute(`UPDATE posts SET views = views + 1 WHERE post_id = ?;`, [post.id])
        return await tx.execute(`SELECT views FROM posts WHERE post_id = ?;`, [post.id])
      })
      resolve(rows[0].views)
    } catch (error) {
      reject(error)
    }
  })

  return {
    post,
    streamed: { views }
  }
}
