<script lang='ts'>
  import { formatDate } from '$lib/utils'
  export let data
</script>

<svelte:head>
  <title>Joel Rivera — Blog</title>

  <meta
    name='description'
    content='This is my personal development blog, where I ocassionally post about engineering topics that I find interesting.'
  />
</svelte:head>

<div class='w-full p-7 min-h-screen md:py-28 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted dark:bg-white/5'>
  <h1 class='text-olive-500 font-medium text-2xl md:text-4xl lg:text-[40px] font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-12px] antialiased mb-10'>Blog</h1>

  {#if data.posts}
    {#each data.posts as post (post.id)}
      {@const { title, updatedAt, slug } = post}

      <a class='block mb-6' href='/blog/post/{slug}'>
        <span class='block antialiased font-semibold'>
          {title}
        </span>

        <small class='antialiased text-gray-500'>
          {formatDate(new Date(updatedAt))}
        </small>
      </a>
    {/each}
  {/if}
</div>