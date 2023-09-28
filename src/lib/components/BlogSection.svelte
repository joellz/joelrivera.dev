<script lang='ts'>
  import type { Post } from '../../types/generated/graphql'
  import LinkIcon from './icons/LinkIcon.svelte'

  export let posts: Array<Post>
  let activePost = posts[0]

  const url = `/blog/post/${activePost.slug}`
</script>

<section class='flex flex-col xl:flex-row xl:items-center xl:justify-between p-7 md:py-28 lg:py-40 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted'>
  <!--Tabs-->
  <div class='w-full xl:w-1/2 flex flex-col lg:mr-16'>
    <div>
      <header class='w-full flex items-center justify-between'>
        <h1 class='font-extrabold font-mono antialiased'>Blog</h1>
      </header>
    </div>

    <ul class='mt-7 font-light'>
      {#each posts as post (post.id)}
        {@const { id, title, slug } = post }
        {@const isActive = id === activePost.id}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li
          class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-olive-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
          class:text-olive-500={isActive}
          class:border-b-olive-100={isActive}
          class:before:bg-olive-500={isActive}
          on:click={() => activePost = post}>

          {title}

          <a href='/blog/post/{slug}' class='focus:outline-dotted dark:focus:outline-white/50 focus:outline-black' aria-label='Read this blog post.'>
            <LinkIcon />
          </a>
        </li>
      {/each}

      <li>
        <a
          class='block text-xs mt-6 hover:opacity-50 focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
          href='/blog'>
          View all
        </a>
      </li>
    </ul>
  </div>

  <!--Dynamic Data-->
  <div class='w-full lg:w-2/3 xl:w-1/2 xl:ml-10 mt-7'>
    <span class='font-bold font-mono text-sm tracking-tight antialiased'>
      {activePost.title}
    </span>

    <p class='font-light my-2 text-sm'>
      {activePost.description}
    </p>

    <a href={url} class='text-olive-500 text-sm focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
      Read it
    </a>
  </div>
</section>