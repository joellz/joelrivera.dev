<script lang='ts'>
  import type { PageData } from './$types'

  import Section from '$lib/components/Section.svelte'
  import SocialButtons from '$lib/components/SocialButtons.svelte'

  export let data: PageData
  const { projects, employers, posts } = data
</script>

<main>
  <!--Hero Section-->
  <section class='md:h-96 xl:h-[500px] p-7 md:px-28 lg:px-40 md:flex md:items-center md:flex-row md:justify-between border-b-[#E9E9E9] border-b-2 border-dotted'>
    <div>
      <h1 class='text-brown-500 font-medium text-2xl md:text-4xl lg:text-5xl max-w-lg font-mono tracking-tighter [word-spacing:-7px] xl:[word-spacing:-12px]'>
        I love to design and build stuff for the web.
      </h1>

      <div>
        <p class='font-light pt-5 lg:max-w-lg'>
          Hey! I'm Joel, a senior front-end software engineer specializing
          in modern web applications. I love to play around with
          cutting-edge tech like SvelteKit, Remix, Qwik, Tailwind, and GraphQL
          among other things.
        </p>

        <button class='text-brown-500 mt-5 font-medium text-xs'>
          Read more
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
  </section>

  <div class='w-full bg-brown-50'>
    <Section data={{ type: 'Projects', list: projects }} />
    <Section data={{ type: 'Employment', list: employers }} />
    <Section data={{ type: 'Blog', list: posts }} />
  </div>

  <footer class='w-full bg-brown-500 xl:h-[500px] p-7 pb-10 md:pb-32 md:pt-28 lg:py-40 md:px-28 lg:px-40 flex flex-col md:items-start md:flex-row md:justify-between mt-1'>
    <div>
      <div class='w-full flex items-center justify-between'>
        <h1 class='font-extrabold text-white font-mono'>
          Contact
        </h1>

        <div class='md:hidden'>
          <SocialButtons />
        </div>
      </div>

      <p class='text-white font-extralight md:max-w-[300px] lg:max-w-lg mt-10'>
        Although I'm not currently looking for any new
        employment opportunities, my inbox is always open.
      </p>

      <div class='hidden md:flex md:mt-10 mt-6'>
        <SocialButtons />
      </div>
    </div>

    <button class='flex items-center justify-between bg-black text-white text-sm w-full md:w-[250px] max-w-xs pt-3 pb-3.5 px-5 mt-10 md:mt-16 md:ml-10'>
      Say Hello! <img src='/right-arrow-xs-light.svg' alt='' />
    </button>
  </footer>
</main>