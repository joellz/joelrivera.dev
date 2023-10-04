<script lang='ts'>
  import type { PageData } from './$types'

  import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing'

  import BlogSection from '$lib/components/BlogSection.svelte'
  import ProjectSection from '$lib/components/ProjectSection.svelte'
  import EmploymentSection from '$lib/components/EmploymentSection.svelte'
  import SocialButtons from '$lib/components/icons/SocialButtons.svelte'

  import { applyTheme } from '$lib/theme/apply'
  import { beforeUpdate } from 'svelte'

  export let data: PageData
  const { projects, employers, posts } = data

  let heroExpanded = false

  beforeUpdate(() => applyTheme())
</script>

<svelte:head>
  <title>Joel Rivera</title>

  <meta
    name='description'
    content='Learn more about who I am as a creative software engineer.'
  />
</svelte:head>

<main>
  <section class='md:min-h-96 xl:min-h-[500px] p-7 pb-16 md:px-28 lg:px-40 border-y-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted dark:bg-white/5 flex flex-col items-start justify-start lg:items-center lg:justify-center bg-[radial-gradient(rgba(255,255,255,0.35),transparent_1px)] [background-size:36px_36px]'>
    <h1 class='title text-olive-500 lg:text-center font-medium text-2xl md:text-4xl lg:text-[40px] max-w-2xl font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-15px] antialiased'>
      I love to design and build experiences for the web.
    </h1>

    <p class='font-light pt-5 lg:max-w-lg dark:antialiased lg:text-center'>
      Hey! I'm Joel, a senior front-end software engineer specializing
      in modern web applications. I love to play around with
      cutting-edge tech SvelteKit, Qwik, and GraphQL
      among other things.
    </p>

    <button
      class='text-black dark:text-white mt-5 font-medium text-xs focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
      on:click={() => heroExpanded = !heroExpanded}>
      { heroExpanded ? 'Collapse' : 'Read more' }
    </button>

    {#if heroExpanded}
      <div
        transition:fade={{
          easing: quintInOut,
          duration: 200
        }}
        class='font-light lg:max-w-lg text-gray-600 dark:text-gray-400 dark:antialiased lg:text-center'>

        <p class='pt-5'>
          My tech stack is React, TypeScript, TailwindCSS, Next.js and Remix.
          I am really interested and passionate about building products and
          user experiences on the web. I've been doing it for (almost) 10 years.
        </p>

        <p class='pt-5'>
          Because of my background in graphic design, I am a perfectionist, and
          I have a keen eye for design and detail. I care about the details that
          people generally <em>don't notice</em> and <em>don't care</em> to know about.
        </p>

        <p class='pt-5'>
          I touch everything that goes into building a complete product—UI/UX design,
          front-end design, architecture, implementation and testing, back-end
          api's, databases, and multi-stage CI/CD deployments.
        </p>

        <p class='pt-5'>
          Most importantly though, and above everything else, I am a consecrated
          Seventh-day Adventist christian. I love Jesus Christ, I am
          surrendered to him, and my entire life is centered around glorifying him.
        </p>

        <p class='pt-5'>
          I'm married to a beautiful wife, and we're actively engaged in
          ministry to finish God's work. We're preparing to meet Christ on
          that glorious and blessed morning when he shall come to gather
          us as his elect.
        </p>
      </div>
    {/if}
  </section>

  <div class='w-full bg-olive-50 dark:bg-white/5'>
    <ProjectSection {projects} />
    <EmploymentSection {employers} />
    <BlogSection {posts} />
  </div>

  <footer class='w-full bg-gradient-to-r from-white from-7% to-olive-500/20 dark:from-black dark:to-olive-100 xl:h-[500px] p-7 pb-10 md:pb-32 md:pt-28 lg:py-40 md:px-28 lg:px-40 flex flex-col md:items-start md:flex-row md:justify-between mt-1'>
    <div>
      <div class='w-full flex items-center justify-between'>
        <h1 class='font-extrabold text-black dark:text-white font-mono'>
          Contact
        </h1>

        <div class='md:hidden'>
          <SocialButtons />
        </div>
      </div>

      <p class='text-black dark:text-white font-light md:max-w-[300px] lg:max-w-lg mt-10'>
        Although I'm not currently looking for any new
        employment opportunities, my inbox is always open.
      </p>

      <div class='hidden md:flex md:mt-10 mt-6'>
        <SocialButtons />
      </div>
    </div>

    <a href='mailto:joelrivera.me@gmail.com?subject=Hello!' class='flex items-center justify-between bg-black text-white text-sm w-full md:w-[250px] pt-3 pb-3.5 px-5 mt-10 md:mt-16 md:ml-10 hover:bg-olive-500 dark:hover:bg-white/5 focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
      Say Hello! <img src='/right-arrow-xs-light.svg' alt='' width='18' height='18' aria-hidden={true} />
    </a>
  </footer>
</main>