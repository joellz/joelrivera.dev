<script lang="ts">
  export let data
  import { ArrowRight } from 'lucide-svelte'
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

<main class="antialiased mb-20 lg:mb-10">
  <h1 class="flex flex-col">Work</h1>

  <p class="w-full mt-10 text-current">
    I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development.
  </p>

  <section class="my-20">
    <h2 class="mb-8">Skills</h2>

    <p class="opacity-50">
      TypeScript, React, Next, Remix, SvelteKit, TailwindCSS, GraphQL, Node, Jest, React Testing
      Library, Cypress, Postgres, MongoDB, Web Accessibility, IBM Watson AI, Generative AI, CI/CD,
      IBM Cloud, Vercel
    </p>
  </section>

  <section
    class="my-20 relative after:border after:border-stone-50/5 after:absolute after:w-full after:top-1 after:left-0 after:scale-x-110 after:bg-stone-50/5 after:-z-10 after:scale-y-125 after:h-full after:rounded-xl after:p-5 after:block"
  >
    <h2 class="mb-8">Consulting</h2>

    <p class="opacity-50">
      I'm available for freelance work. If you have a project you have in mind, let's talk about it.
      Fixed project costs, no surprises.
    </p>

    <a
      href="/consulting"
      class="inline-block bg-white/10 rounded-lg mt-5 py-2 px-4 pb-2.5 hover:bg-white/30 transition-all"
    >
      Learn More <ArrowRight class="inline-block ml-1" size={16} />
    </a>
  </section>

  <section>
    <h2 class="mb-8">Experience</h2>

    <ul>
      {#each data.employers as { id, duration, name, role, description } (id)}
        <li class="mb-8 last:mb-0">
          <h2>{name}, {role}</h2>
          <p class="opacity-50">{description}</p>
        </li>
      {/each}
    </ul>

    <a
      href="/resume.pdf"
      class="inline-block bg-white/10 rounded-lg mt-10 py-2 px-4 pb-2.5 hover:bg-white/30 transition-all"
    >
      View Resume
    </a>
  </section>
</main>
