<script lang="ts">
  import { marked } from 'marked'
  import { formatDate } from '$lib/utils'
  import { ArrowRight } from 'lucide-svelte'

  export let data

  const { title, description, body, publishedAt } = data.post
  const published = formatDate(new Date(publishedAt))
</script>

<svelte:head>
  <title>Joel Rivera — {title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="relative w-full p-10 lg:p-14">
  <h1 class="antialiased">{title}</h1>

  <p class="flex items-center opacity-50 antialiased">
    {published}
  </p>

  <main
    class="max-w-lg mt-10 pb-14 lg:mt-14 prose prose-h1:text-white prose-h1:mt-12 prose-h1:font-semibold prose-h1:mb-0 prose-code:text-white/50 prose-h2:text-white prose-h2:mb-2 prose-pre:bg-white/5 prose-h3:text-white/50 prose-h3:mb-2 prose-ol:text-green-50 prose-p:text-green-50 prose-p:antialiased prose-a:text-white/50 prose-a:focus:outline-dotted prose-a:focus:outline-white/50"
  >
    {@html marked(body)}
  </main>
</div>
