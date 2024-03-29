<script lang="ts">
  import { marked } from 'marked'
  import { formatDate } from '$lib/utils'

  export let data

  const { title, description, body, publishedAt } = data.post
  const published = formatDate(new Date(publishedAt))
</script>

<svelte:head>
  <title>Joel Rivera — {title}</title>

  <meta name="description" content={description} />
</svelte:head>

<div class="relative w-full p-10 lg:p-14">
  <header>
    <h1 class="antialiased">{title}</h1>

    <p class="flex items-center opacity-50 antialiased">
      {published}
    </p>
  </header>

  <main
    class="max-w-lg mt-10 lg:mt-14 prose prose-p:text-green-50 prose-p:antialiased prose-a:text-olive-500 focus:prose-outline-dotted focus:prose-outline-white/50"
  >
    {@html marked(body)}
  </main>

  <div class="w-full max-w-lg flex items-center justify-between my-10">
    <a
      class="my-14 block max-w-xs focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg antialiased"
      href="/blog">View all posts</a
    >
  </div>
</div>
