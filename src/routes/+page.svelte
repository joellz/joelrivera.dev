<script lang="ts">
  export let data
  const { projects, posts } = data
</script>

<svelte:head>
  <title>Joel Rivera. Senior Front-End Engineer, AI</title>

  <meta
    name="description"
    content="I love to build modern, AI-powered web applications, combining my engineering expertise with a
    graphic designer's eye for design and detail."
  />

  <meta name="og:title" content="Joel Rivera. Senior Front-End Engineer, AI" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`I love to build modern, AI-powered web applications, combining my engineering expertise with a
    graphic designer's eye for design and detail.`}
  />
</svelte:head>

<main>
  <h1 class="antialiased flex flex-col">
    Joel Rivera
    <span class="antialiased opacity-50">Senior Front-End Engineer, AI</span>
  </h1>

  <p class="w-full my-20 mt-[68px] antialiased max-w-md">
    I love to build modern, AI-powered web applications, combining my engineering expertise with a
    graphic designer's eye for design and detail.
  </p>

  <!--Apps-->
  <section>
    <h2 class="font-bold mb-8">Projects</h2>

    {#each projects as project}
      <a
        class="block max-w-md focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
        href={project.url}
        rel="noreferrer nofollow"
        target="_blank"
      >
        <div class="w-full max-w-md mb-8">
          <p class="antialiased">{project.name}</p>
          <p class="antialiased opacity-50">{project.description}</p>
        </div>
      </a>
    {/each}
  </section>

  <!--Posts-->
  <section class="my-20">
    <h2 class="font-bold mb-8">Blog</h2>

    {#each posts as post}
      <a
        class="block max-w-md focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
        href="/post/{post.slug}"
      >
        <div class="w-full max-w-md mb-8">
          <p class="antialiased">{post.title}</p>
          <p class="antialiased opacity-50">{post.description}</p>
        </div>
      </a>
    {/each}
  </section>
</main>
