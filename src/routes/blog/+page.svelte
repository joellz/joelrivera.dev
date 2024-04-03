<script lang="ts">
  import { formatDate } from '$lib/utils'
  export let data
</script>

<svelte:head>
  <title>Joel Rivera — Blog</title>

  <meta
    name="description"
    content="This is my personal development blog, where I ocassionally post about engineering topics that I find interesting."
  />
</svelte:head>

<main>
  <h1 class="antialiased">Blog</h1>

  <p class="w-full my-20 mt-[68px] antialiased max-w-md">
    This is my personal dev blog, where I ocassionally <span class="line-through opacity-50"
      >rant</span
    > or post about engineering topics that I find to be very interesting.
  </p>

  <section class="mt-14">
    {#each data.posts as post (post.id)}
      {@const { title, createdAt, slug } = post}

      <a
        class="block mb-6 max-w-md focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
        href="/post/{slug}"
      >
        <span class="block antialiased font-semibold">
          {title}
        </span>

        <p class="antialiased opacity-50">
          {formatDate(new Date(createdAt))}
        </p>
      </a>
    {/each}
  </section>
</main>
