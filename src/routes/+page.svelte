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
</svelte:head>

<main>
  <!--Hero Section-->
  <section class='md:min-h-96 xl:min-h-[500px] p-7 pb-16 md:px-28 lg:px-40 xl:pt-28 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted dark:bg-white/5 flex flex-col items-start justify-start'>
    <h1 class='title text-olive-500 font-medium text-2xl md:text-4xl lg:text-[40px] max-w-lg font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-12px] antialiased'>
      I love to design and build experiences for the web.
    </h1>

    <p class='font-light pt-5 lg:max-w-lg dark:antialiased'>
      Hey! I'm Joel, a senior front-end software engineer specializing
      in modern web applications. I love to play around with
      cutting-edge tech like Remix, SvelteKit, Tailwind, and GraphQL
      among other things.
    </p>

    <button
      class='text-black mt-5 font-medium text-xs focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
      on:click={() => heroExpanded = !heroExpanded}>
      { heroExpanded ? 'Read less' : 'Read more' }
    </button>

    {#if heroExpanded}
      <div
        transition:fade={{
          easing: quintInOut,
          duration: 200
        }}
        class='font-light lg:max-w-lg text-gray-600 dark:text-gray-400 dark:antialiased'>

        <p class='pt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam quis nisi
          mattis dapibus at quis libero. Aenean ornare diam ut orci iaculis, id finibus sapien
          viverra. Aliquam quis fermentum diam. In et ipsum vestibulum libero sollicitudin volutpat.
          Nam eu diam ligula. Vestibulum at urna nulla. Maecenas sed felis pretium, ultricies sapien
          sed, efficitur ipsum. Phasellus felis velit, ullamcorper non ultricies vitae, accumsan
          ac nunc. Nam eleifend tortor elit. Phasellus nec risus sollicitudin, sodales sapien
          ac, dictum leo.
        </p>

        <p class='pt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam quis nisi
          mattis dapibus at quis libero. Aenean ornare diam ut orci iaculis, id finibus sapien
          viverra. Aliquam quis fermentum diam. In et ipsum vestibulum libero sollicitudin volutpat.
          Nam eu diam ligula. Vestibulum at urna nulla. Maecenas sed felis pretium, ultricies sapien
          sed, efficitur ipsum. Phasellus felis velit, ullamcorper non ultricies vitae, accumsan
          ac nunc. Nam eleifend tortor elit. Phasellus nec risus sollicitudin, sodales sapien
          ac, dictum leo.
        </p>

        <p class='pt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam quis nisi
          mattis dapibus at quis libero. Aenean ornare diam ut orci iaculis, id finibus sapien
          viverra. Aliquam quis fermentum diam. In et ipsum vestibulum libero sollicitudin volutpat.
          Nam eu diam ligula. Vestibulum at urna nulla. Maecenas sed felis pretium, ultricies sapien
          sed, efficitur ipsum. Phasellus felis velit, ullamcorper non ultricies vitae, accumsan
          ac nunc. Nam eleifend tortor elit. Phasellus nec risus sollicitudin, sodales sapien
          ac, dictum leo.
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

    <a href='mailto:joelrivera.me@gmail.com?subject=Hello!' class='flex items-center justify-between bg-black text-white text-sm w-full md:w-[250px] max-w-xs pt-3 pb-3.5 px-5 mt-10 md:mt-16 md:ml-10 hover:bg-olive-500 dark:hover:bg-white/5 focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
      Say Hello! <img src='/right-arrow-xs-light.svg' alt='' />
    </a>
  </footer>
</main>