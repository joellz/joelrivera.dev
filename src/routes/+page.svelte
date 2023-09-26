<script lang='ts'>
  import type { PageData } from './$types'

  import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing'

  import Section from '$lib/components/Section.svelte'
  import SocialButtons from '$lib/components/SocialButtons.svelte'

  export let data: PageData
  const { projects, employers, posts } = data

  let heroExpanded = false
</script>

<main>
  <!--Hero Section-->
  <section class='md:min-h-96 xl:min-h-[500px] p-7 pb-16 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted dark:bg-white/5'>
    <div class='md:flex md:items-center md:flex-row md:justify-between xl:mt-20'>
      <div>
        <h1 class='text-olive-500 font-medium text-2xl md:text-4xl lg:text-[40px] max-w-lg font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-12px] antialiased'>
          I love to design and build stuff for the web.
        </h1>

        <div>
          <p class='font-light pt-5 lg:max-w-lg'>
            Hey! I'm Joel, a senior front-end software engineer specializing
            in modern web applications. I love to play around with
            cutting-edge tech like React, Remix, SvelteKit, Tailwind, and GraphQL
            among other things.
          </p>

          <button
            class='text-olive-500 mt-5 font-medium text-xs focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
            on:click={() => heroExpanded = !heroExpanded}>
            { heroExpanded ? 'Read less' : 'Read more' }
          </button>
        </div>
      </div>

      <img
        class='hidden xl:flex mt-7 md:m-0'
        width='448'
        height='auto'
        src='/hero.png'
        alt='A hero section portrait of Joel Rivera looking off into the distance.'
      />
    </div>

    {#if heroExpanded}
      <div transition:fade={{ easing: quintInOut, duration: 200 }} class='font-light lg:max-w-lg'>
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
    <Section data={{ type: 'Projects', list: projects }} />
    <Section data={{ type: 'Employment', list: employers }} />
    <Section data={{ type: 'Blog', list: posts }} />
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

    <button class='flex items-center justify-between bg-black text-white text-sm w-full md:w-[250px] max-w-xs pt-3 pb-3.5 px-5 mt-10 md:mt-16 md:ml-10 hover:bg-olive-500 dark:hover:bg-white/5 focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
      Say Hello! <img src='/right-arrow-xs-light.svg' alt='' />
    </button>
  </footer>
</main>