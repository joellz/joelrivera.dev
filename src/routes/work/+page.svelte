<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>Joel Rivera — Work</title>

  <meta
    name="description"
    content="I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development."
  />

  <meta name="og:title" content="Joel Rivera — Work" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development.`}
  />
</svelte:head>

<main class="antialiased max-w-md mb-20 lg:mb-10">
  <h1 class="flex flex-col">Work</h1>

  <p class="w-full mt-10 text-current">
    I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development.
  </p>

  <section class="my-20">
    <h2 class="mb-8">Skills</h2>

    <p class="text-green-200">
      TypeScript, React, Next, Remix, SvelteKit, TailwindCSS, Node, Jest, React Testing Library,
      Cypress, Postgres, MongoDB, Web Accessibility, CI/CD
    </p>
  </section>

  <section>
    <h2 class="mb-8">Experience</h2>

    <ul>
      {#each data.employers as { id, duration, name, role, description } (id)}
        <li class="mb-8 last:mb-0">
          <h2>{name}, {role}, {duration}</h2>
          <p class="opacity-50">{description}</p>
        </li>
      {/each}
    </ul>
  </section>
</main>
