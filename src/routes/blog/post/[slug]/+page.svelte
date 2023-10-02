<script lang='ts'>
  import { marked } from 'marked'
  import { formatDate } from '$lib/utils'

  export let data

  const { title, description, body, publishedAt } = data.post
  const published = formatDate(new Date(publishedAt))

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
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

  <div class='w-full flex items-center justify-center mx-auto my-5 lg:my-8 antialiased text-gray-500'>
    <small class='flex items-center'>
      {published}

      {#await data.streamed.views}
        <span class='w-3 h-3 shrink-0 rounded-full ml-2 border-2 border-gray-500 border-dotted animate-spin' />
        {:then views}
          {#if views} — {views} Views {/if}
      {/await}
    </small>
  </div>

  <main class='container mx-auto max-w-xl prose prose-p:dark:text-white prose-p:text-sm lg:prose-p:text-lg prose-p:font-light prose-p:antialiased prose-p:text-black prose-a:text-olive-500 focus:outline-dotted dark:focus:outline-white/50'>
    {@html marked(body)}
  </main>

  <div class='max-w-xl mx-auto flex justify-center mt-16 border-t-2 border-t-black/25 dark:border-t-white/25 border-dotted pt-5'>
    <button
      class='flex items-center justify-center text-center mx-auto text-xs focus:outline-dotted dark:focus:outline-white/50 hover:opacity-30'
      on:click={scrollToTop}>
      Back to top

      <div
        role='img'
        aria-hidden={true}
        class='relative h-2 border-l border-l-black dark:border-l-white ml-3 mr-1 before:absolute before:w-1.5 before:h-1.5 before:border-b before:border-b-black dark:before:border-b-white before:border-l before:border-l-black dark:before:border-l-white before:rotate-[135deg] before:-left-[3.5px]'
      />
    </button>
  </div>
</div>
