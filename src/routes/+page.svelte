<script lang="ts">
  export let data
  const { projects, posts } = data
</script>

<svelte:head>
  <title>Joel Rivera</title>

  <meta
    name="description"
    content="I craft innovative, AI-powered web applications that blend technical expertise with creative
    vision, delivering exceptional, functional, visually stunning user experiences."
  />

  <meta name="og:title" content="Joel Rivera" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`I craft innovative, AI-powered web applications that blend technical expertise with creative
    vision, delivering exceptional, functional, visually stunning user experiences.`}
  />
</svelte:head>

<main>
  <h1 class="antialiased flex flex-col">
    Joel Rivera
    <span class="antialiased opacity-50">Full-Stack Designer</span>
  </h1>

  <p class="w-full my-20 mt-[68px] antialiased">
    I craft innovative, AI-powered web applications that blend technical expertise with creative
    vision, delivering exceptional, functional, visually stunning user experiences.
  </p>

  <!--Apps-->
  <section>
    <h2 class="font-bold mb-8">Projects</h2>

    <ul>
      {#each projects as project}
        <li>
          <a
            class="block focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
            href={project.url}
            rel="noreferrer nofollow"
            target="_blank"
          >
            <div class="w-full mb-8">
              <p class="antialiased">{project.name}</p>
              <p class="antialiased opacity-50">{project.description}</p>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <!--Posts-->
  <section class="my-20">
    <h2 class="font-bold mb-8">Blog</h2>

    <ul>
      {#each posts as post}
        <li>
          <a
            class="block focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
            href="/post/{post.slug}"
          >
            <div class="w-full mb-8">
              <p class="antialiased">{post.title}</p>
              <p class="antialiased opacity-50">{post.description}</p>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</main>
