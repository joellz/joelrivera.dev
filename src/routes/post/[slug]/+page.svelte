<script lang="ts">
  import { marked } from 'marked'
  import { formatDate } from '$lib/utils'

  export let data

  const { title, description, body, createdAt } = data.post
  const published = formatDate(new Date(createdAt))
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="og:type" content="article" />
  <meta name="article:published_time" content={published} />
  <meta name="article:author" content="Joel Rivera" />
</svelte:head>

<div>
  <h1 class="antialiased">{title}</h1>

  <p class="flex items-center opacity-50 antialiased">
    {published}
  </p>

  <main
    class="mt-10 pb-14 lg:mt-14 prose prose-h1:text-white prose-h2:text-lg prose-h3:text-lg prose-h1:mt-10 prose-h1:font-semibold prose-h1:mb-0 prose-strong:text-white/50 prose-code:text-green-50/80 prose-inline-code:text-white/50 prose-h2:text-white prose-h2:mb-2 prose-pre:bg-white/5 prose-h3:text-white prose-h3:mb-2 prose-ol:text-white prose-p:text-white prose-p:antialiased prose-a:text-white/50 prose-a:focus:outline-dotted prose-a:focus:outline-white/50"
  >
    {@html marked(body)}
  </main>
</div>
