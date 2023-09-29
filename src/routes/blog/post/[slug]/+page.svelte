<script lang='ts'>
  import { marked } from 'marked'
  import { formatDate } from '$lib/utils'

  export let data

  const { title, description, body, updatedAt, publishedAt } = data.post
  const published = formatDate(new Date(publishedAt))
</script>

<svelte:head>
  <title>Joel Rivera — {title}</title>

  <meta
    name='description'
    content={description}
  />
</svelte:head>

<div class='w-full p-7 md:py-28 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted dark:bg-white/5'>
  <h1 class='text-center text-olive-500 font-medium text-2xl md:text-4xl lg:text-[40px] font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-12px] antialiased'>
    {title}
  </h1>

  <small class='text-center block my-5 lg:my-8 antialiased text-gray-500'>
    {published}
  </small>

  <main class='container mx-auto max-w-xl prose prose-p:dark:text-white prose-p:text-sm lg:prose-p:text-lg prose-p:font-light prose-p:antialiased prose-p:text-black prose-a:text-olive-500'>
    {@html marked(body)}
  </main>
</div>
