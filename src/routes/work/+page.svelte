<script lang="ts">
  export let data
</script>

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

    <p class="text-green-100">
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
